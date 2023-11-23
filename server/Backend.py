import pandas as pd
from sklearn.model_selection import train_test_split
# from inve import ansList

def fun(ansList):
    file = "E:/StockSwabhava/server/mock_personality_dataset.csv"
    data = pd.read_csv(file)

    row_sums = data.sum(axis=1)

    low_threshold = 0.25
    medium_threshold = 0.5
    moderate_threshold = 0.75

    data['Output'] = row_sums.apply(lambda x: 'low' if x < low_threshold * len(data.columns)
                                else ('medium' if x < medium_threshold * len(data.columns)
                                        else ('moderate' if x < moderate_threshold * len(data.columns) else 'high')))

    Y = data['Output']

    X = data.drop('Output',axis = 1)
    X_train, X_test, y_train, y_test = train_test_split(X, Y, test_size=0.2, random_state=42)
    from sklearn.metrics import accuracy_score, classification_report
    from sklearn import tree

    from sklearn.ensemble import RandomForestClassifier
    import numpy as np

    # Create a Random Forest classifier
    clf = RandomForestClassifier(n_estimators=100, random_state=42)

    # Train the classifier on the training data
    clf.fit(X_train, y_train)

    # Make predictions on the test data
    y_pred = clf.predict(X_test)


    # Calculate the accuracy of the model
    accuracy = accuracy_score(y_test, y_pred)
    print(classification_report(y_test, y_pred))
    print(f"Accuracy: {accuracy}")


    sample_data = {
        'Primary Aim': 0,
        'Comfort with Potential Losses': 0,
        'Gains Preference': 0,
        'Market Volatility Reaction': 0,
        'Time Frame for Goals': 0,
        'Financial Uncertainty Handling': 0,
        'Stress and Pressure Management': 0,
        'Focus on Investments or Savings': 0,
        'Weight on Expert Advice': 0,
        'Reaction to Financial Changes': 0,
        'Level of Financial Risk':0,
        'Returns Preference': 0,
        'Comfort with Investment Fluctuations': 0,
        'Decision-Making Guidance': 0,
        'Openness to New Strategies': 0
    }
    keys = sample_data.keys()
    for i in range(len(ansList)):
        sample_data[keys[i]] = ansList[i]
    # Convert the dictionary to a Pandas DataFrame
    sample_data_df = pd.DataFrame(sample_data, index=[0])

    # Use the trained Logistic Regression model to make predictions
    sample_predictions = clf.predict(sample_data_df)

    # Map the numerical predictions back to risk labels
    # reverse_risk_mapping = {'low':0,  'medium':1, 'moderate':2,  'high':3}
    print(sample_predictions)
    # sample_predictions = [reverse_risk_mapping[pred] for pred in sample_predictions]
    return sample_predictions