// Luxury Ranking Game - Premium Interactions
// Hold-to-Revert Logic with localStorage Persistence

class RankingGame {
    constructor() {
        this.cards = document.querySelectorAll('.game-card');
        this.holdDuration = 1000; // 1 second hold to revert
        this.holdTimers = new Map();
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            const category = card.dataset.category;
            const items = card.querySelectorAll('.rank-item');
            
            // Load saved rankings
            this.loadRankings(card, category);
            
            // Add click/touch listeners
            items.forEach(item => {
                // Desktop: Mouse events
                item.addEventListener('mousedown', (e) => this.handlePress(e, item, card, category));
                item.addEventListener('mouseup', () => this.handleRelease(item));
                item.addEventListener('mouseleave', () => this.handleRelease(item));
                
                // Mobile: Touch events
                item.addEventListener('touchstart', (e) => this.handlePress(e, item, card, category), { passive: true });
                item.addEventListener('touchend', () => this.handleRelease(item));
                item.addEventListener('touchcancel', () => this.handleRelease(item));
            });
        });
    }

    handlePress(event, item, card, category) {
        const isSelected = item.classList.contains('selected');
        
        if (isSelected) {
            // Start hold timer for revert
            item.classList.add('holding');
            
            const timer = setTimeout(() => {
                this.revertSelection(item, card, category);
            }, this.holdDuration);
            
            this.holdTimers.set(item, timer);
        } else {
            // Immediate selection
            this.selectItem(item, card, category);
        }
    }

    handleRelease(item) {
        // Clear hold timer if released early
        if (this.holdTimers.has(item)) {
            clearTimeout(this.holdTimers.get(item));
            this.holdTimers.delete(item);
        }
        item.classList.remove('holding');
    }

    selectItem(item, card, category) {
        const items = card.querySelectorAll('.rank-item');
        const selectedItems = card.querySelectorAll('.rank-item.selected');
        
        // Check if all 5 are already selected
        if (selectedItems.length >= 5 && !item.classList.contains('selected')) {
            return; // Can't select more than 5
        }
        
        // Assign next available rank
        const nextRank = selectedItems.length + 1;
        item.classList.add('selected');
        item.querySelector('.rank-number').textContent = nextRank;
        
        // Save to localStorage
        this.saveRankings(card, category);
        
        // Check if complete
        if (selectedItems.length + 1 === 5) {
            setTimeout(() => this.showResults(card), 500);
        }
    }

    revertSelection(item, card, category) {
        item.classList.remove('selected', 'holding');
        item.querySelector('.rank-number').textContent = '';
        
        // Recalculate all ranks
        const items = card.querySelectorAll('.rank-item.selected');
        items.forEach((selectedItem, index) => {
            selectedItem.querySelector('.rank-number').textContent = index + 1;
        });
        
        // Save updated rankings
        this.saveRankings(card, category);
        
        // Hide results if no longer complete
        if (items.length < 5) {
            this.hideResults(card);
        }
    }

    showResults(card) {
        const rankingItems = card.querySelector('.ranking-items');
        const results = card.querySelector('.card-results');
        
        rankingItems.style.display = 'none';
        results.style.display = 'block';
        
        // Animate result bars
        setTimeout(() => {
            results.querySelectorAll('.fill').forEach(fill => {
                fill.style.width = fill.style.width; // Trigger animation
            });
        }, 100);
    }

    hideResults(card) {
        const rankingItems = card.querySelector('.ranking-items');
        const results = card.querySelector('.card-results');
        
        rankingItems.style.display = 'block';
        results.style.display = 'none';
    }

    saveRankings(card, category) {
        const items = card.querySelectorAll('.rank-item.selected');
        const rankings = {};
        
        items.forEach(item => {
            const itemId = item.dataset.item
            ;
const rank = item.querySelector('.rank-number').textContent;
rankings[itemId] = parseInt(rank);
});localStorage.setItem(`luxury-ranking-${category}`, JSON.stringify(rankings));
}

loadRankings(card, category) {
    const saved = localStorage.getItem(`luxury-ranking-${category}`);
    if (!saved) return;
    
    const rankings = JSON.parse(saved);
    const items = card.querySelectorAll('.rank-item');
    
    items.forEach(item => {
        const itemId = item.dataset.item;
        if (rankings[itemId]) {
            item.classList.add('selected');
            item.querySelector('.rank-number').textContent = rankings[itemId];
        }
    });
    
    // Show results if complete
    const selectedItems = card.querySelectorAll('.rank-item.selected');
    if (selectedItems.length === 5) {
        this.showResults(card);
    }
}
}
// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
new RankingGame();
});