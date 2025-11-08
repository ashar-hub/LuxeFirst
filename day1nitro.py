# Learning a pattern: 2, 4, 6, 8, ?

from gettext import install
import pip
import numpy as np
from sklearn.linear_model import LinearRegression

# training data: numbers and their doubled values
X = np.array([[1], [2], [3], [4]])
y = np.array([2, 4, 6, 8])

model = LinearRegression()
model.fit(X, y)

# let's predict the next number
next_value = model.predict(np.array([[5]]))
print("Prediction:", next_value[0])

# Install scikit-learn
pip install scikit-learn
