import streamlit as st

st.header("Investor Swabhava")
st.write("Hello, Investors")
st.write("Navigating Your Investment Journey: Understand Your Financial Goals, Risk Perception, and Investment Strategy")

with st.expander("Step 1: Financial Goals and Risk Perception", expanded=True):
    with st.form("step1"):
        st.radio("What is your primary aim with your investments: building wealth for the future or exploring opportunities for the short term?",
                 ["Seeking to build wealth for the future.", "Exploring opportunities for the short term."], index=False)
        st.radio("How comfortable are you with the idea of potential losses for the chance of higher gains in your investments?",
                 ["Prefer avoiding potential losses.", "Willing to accept potential losses for higher gains."], index=False)
        st.radio("Are you more inclined toward short-term gains or long-term, stable growth for your investments?",
                 ["Inclined towards long-term, stable growth.", "Inclined towards short-term gains."], index=False)
        st.radio("Considering market volatility, would you be more likely to sell off your investments or hold onto them?",
                 ["More likely to hold onto investments.", "More likely to sell off during volatility."], index=False)
        st.radio("Do you have a specific time frame in mind for achieving your investment goals?",
                 ["Have a clear time frame for goals.", "Negative: No specific time frame in mind."], index=False)
        st.form_submit_button("Next")
