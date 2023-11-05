import streamlit as st



st.set_page_config(
    page_title="Investor Swabhava",
    page_icon=".",
    layout="centered",
    initial_sidebar_state="auto",
)

st.title("Investor Swabhava")
st.write("Hello, Investors")
st.write("Navigating Your Investment Journey: Understand Your Financial Goals, Risk Perception, and Investment Strategy")

step = st.session_state.get("step", 1)

if step == 1:
    st.markdown("**Step 1: Financial Goals and Risk Perception**")

    with st.expander("1. What is your primary aim with your investments: building wealth for the future or exploring opportunities for the short term?", expanded=True):
        answer1 = st.radio(
            "Select your primary aim:",
            ["Building wealth for the future", "Exploring opportunities for the short term"],
            index=False
        )

    with st.expander("2. How comfortable are you with the idea of potential losses for the chance of higher gains in your investments?", expanded=True):
        answer2 = st.radio(
            "Select your comfort level:",
            ["Prefer avoiding potential losses", "Willing to accept potential losses for higher gains"],
            index=False
        )

    with st.expander("3. Are you more inclined toward short-term gains or long-term, stable growth for your investments?", expanded=True):
        answer3 = st.radio(
            "Select your inclination:",
            ["Inclined towards long-term, stable growth", "Inclined towards short-term gains"],
            index=False
        )

    with st.expander("4. Considering market volatility, would you be more likely to sell off your investments or hold onto them?", expanded=True):
        answer4 = st.radio(
            "Select your approach:",
            ["More likely to hold onto investments", "More likely to sell off during volatility"],
            index=False
        )

    with st.expander("5. Do you have a specific time frame in mind for achieving your investment goals?", expanded=True):
        answer5 = st.radio(
            "Select your approach:",
            ["Have a clear time frame for goals", "No specific time frame in mind"],
            index=False
        )

    if st.button("Next"):
        st.session_state.step = 2
        st.session_state.answers = {"step1": [answer1, answer2, answer3, answer4, answer5]}

elif step == 2:
    st.markdown("**Step 2: Personal Financial Approach and Decision Making**")

    with st.expander("1. When faced with financial uncertainty, do you usually rely on careful analysis or trust your intuition and gut feeling?", expanded=True):
        answer1 = st.radio(
            "Select your approach:",
            ["Rely on careful analysis", "Trust intuition more than analysis"],
            index=False
        )

    with st.expander("2. How do you perceive and manage stress or pressure when it comes to financial decisions?", expanded=True):
        answer2 = st.radio(
            "Select your approach:",
            ["Manage stress well and stay composed", "Feel significant pressure and stress"],
            index=False
        )

    with st.expander("3. Are you more focused on growing your investments or securing your current savings and financial stability?", expanded=True):
        answer3 = st.radio(
            "Select your focus:",
            ["More focused on securing current savings", "Focus on growing investments"],
            index=False
        )

    with st.expander("4. In your decision-making process, how much weight do you place on expert advice and market analysis?", expanded=True):
        answer4 = st.radio(
            "Select your approach:",
            ["Give significant weight to expert advice and analysis", "Rely less on expert advice and analysis"],
            index=False
        )

    with st.expander("5. How do you react to sudden changes or unexpected events in the financial landscape?", expanded=True):
        answer5 = st.radio(
            "Select your approach:",
            ["Find it difficult to cope with sudden changes", "Adapt and adjust to changes effectively"],
            index=False
        )

    if st.button("Next"):
        st.session_state.step = 3
        st.session_state.answers["step2"] = [answer1, answer2, answer3, answer4, answer5]

elif step == 3:
    st.markdown("**Step 3: Risk Preferences and Investment Strategy**")

    with st.expander("1. What level of financial risk feels acceptable to you given your present financial situation?", expanded=True):
        answer1 = st.radio(
            "Select your risk tolerance:",
            ["Prefer lower risks", "Willing to take higher risks"],
            index=False
        )

    with st.expander("2. When considering investments, do you lean more towards high potential returns or prefer stability and lower risk?", expanded=True):
        answer2 = st.radio(
            "Select your approach:",
            ["Prefer stability and lower risk", "Lean towards high potential returns"],
            index=False
        )

    with st.expander("3. How comfortable are you with the idea of the value of your investments fluctuating over time?", expanded=True):
        answer3 = st.radio(
            "Select your comfort level:",
            ["Uncomfortable with fluctuations", "Comfortable with fluctuations"],
            index=False
        )

    with st.expander("4. In uncertain market conditions, what guides your decision-making: careful analysis or a more intuitive, quick response?", expanded=True):
        answer4 = st.radio(
            "Select your approach:",
            ["Decision guided by careful analysis", "Decision guided more by intuition and quick response"],
            index=False
        )

    with st.expander("5. How open are you to exploring new or alternative investment ideas and strategies?", expanded=True):
        answer5 = st.radio(
            "Select your approach:",
            ["Not very open to exploring new strategies", "Very open to exploring new strategies"],
            index=False
        )

    if st.button("Submit"):
        st.session_state.step = None
        st.session_state.answers["step3"] = [answer1, answer2, answer3, answer4, answer5]

if step is None:
    st.subheader("Your Questionnaire Report")
    st.write("Based on your responses, here's a summary of your financial profile:")

    # Display the questionnaire report here
    report = {
        "Step 1: Financial Goals and Risk Perception": st.session_state.answers["step1"],
        "Step 2: Personal Financial Approach and Decision Making": st.session_state.answers["step2"],
        "Step 3: Risk Preferences and Investment Strategy": st.session_state.answers["step3"]
    }

    for step, answers in report.items():
        st.markdown(f"**{step}**")
        for i, answer in enumerate(answers):
            st.write(f"{i + 1}. {answer}")

    st.write("Thank you for completing the questionnaire. Your responses have been recorded.")
