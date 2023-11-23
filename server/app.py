import streamlit as st
from Backend import fun

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
ansList = []
if step == 1:
    st.markdown("Step 1: Financial Goals and Risk Perception")

    with st.expander("1. What is your primary aim with your investments: building wealth for the future or exploring opportunities for the short term?", expanded=True):
        L1 = ["Building wealth for the future", "Exploring opportunities for the short term"]
        answer1 = st.radio(
            "Select your primary aim:",
            L1,
            index=False
        )
        ansList.append(L1.index(answer1))

    with st.expander("2. How comfortable are you with the idea of potential losses for the chance of higher gains in your investments?", expanded=True):
        L2=["Prefer avoiding potential losses", "Willing to accept potential losses for higher gains"]
        answer2 = st.radio(
            "Select your comfort level:",
            L2,
            index=False
        )
        ansList.append(L2.index(answer2))

    with st.expander("3. Are you more inclined toward short-term gains or long-term, stable growth for your investments?", expanded=True):
        L3=["Inclined towards long-term, stable growth", "Inclined towards short-term gains"]
        answer3 = st.radio(
            "Select your inclination:",
            L3,
            index=False
        )
        ansList.append(L3.index(answer3))

    with st.expander("4. Considering market volatility, would you be more likely to sell off your investments or hold onto them?", expanded=True):
        L4=["More likely to hold onto investments", "More likely to sell off during volatility"]
        answer4 = st.radio(
            "Select your approach:",
            L4,
            index=False
        )
        ansList.append(L4.index(answer4))

    with st.expander("5. Do you have a specific time frame in mind for achieving your investment goals?", expanded=True):
        L5=["Have a clear time frame for goals", "No specific time frame in mind"]
        answer5 = st.radio(
            "Select your approach:",
            L5,
            index=False
        )
        ansList.append(L5.index(answer5))

    if st.button("Next") or st.session_state.get('next_clicked', False):
        st.session_state.step = 2
        st.session_state.answers = {"step1": [answer1, answer2, answer3, answer4, answer5]}
        st.session_state.next_clicked = True

elif step == 2:
    st.markdown("Step 2: Personal Financial Approach and Decision Making")

    with st.expander("1. When faced with financial uncertainty, do you usually rely on careful analysis or trust your intuition and gut feeling?", expanded=True):
        L6=["Rely on careful analysis", "Trust intuition more than analysis"]
        answer1 = st.radio(
            "Select your approach:",
            L6,
            index=False
        )
        ansList.append(L6.index(answer1))

    with st.expander("2. How do you perceive and manage stress or pressure when it comes to financial decisions?", expanded=True):
        L7=["Manage stress well and stay composed", "Feel significant pressure and stress"]
        answer2 = st.radio(
            "Select your approach:",
            L7,
            index=False
        )
        ansList.append(L7.index(answer2))

    with st.expander("3. Are you more focused on growing your investments or securing your current savings and financial stability?", expanded=True):
        L8=["More focused on securing current savings", "Focus on growing investments"]
        answer3 = st.radio(
            "Select your focus:",
            L8,
            index=False
        )
        ansList.append(L8.index(answer3))

    with st.expander("4. In your decision-making process, how much weight do you place on expert advice and market analysis?", expanded=True):
        L9=["Give significant weight to expert advice and analysis", "Rely less on expert advice and analysis"]
        answer4 = st.radio(
            "Select your approach:",
            L9,
            index=False
        )
        ansList.append(L9.index(answer4))

    with st.expander("5. How do you react to sudden changes or unexpected events in the financial landscape?", expanded=True):
        L10=["Find it difficult to cope with sudden changes", "Adapt and adjust to changes effectively"]
        answer5 = st.radio(
            "Select your approach:",
            L10,
            index=False
        )
        ansList.append(L10.index(answer5))


    if st.button("Next") or st.session_state.get('next_clicked', False):
        st.session_state.step = 3
        st.session_state.answers["step2"] = [answer1, answer2, answer3, answer4, answer5]
        st.session_state.next_clicked = True

elif step == 3:
    st.markdown("Step 3: Risk Preferences and Investment Strategy")

    with st.expander("1. What level of financial risk feels acceptable to you given your present financial situation?", expanded=True):
        L11=["Prefer lower risks", "Willing to take higher risks"]
        answer1 = st.radio(
            "Select your risk tolerance:",
            L11,
            index=False
        )
        ansList.append(L11.index(answer1))

    with st.expander("2. When considering investments, do you lean more towards high potential returns or prefer stability and lower risk?", expanded=True):
        L12=["Prefer stability and lower risk", "Lean towards high potential returns"]
        answer2 = st.radio(
            "Select your approach:",
            L12,
            index=False
        )
        ansList.append(L12.index(answer2))

    with st.expander("3. How comfortable are you with the idea of the value of your investments fluctuating over time?", expanded=True):
        L13=["Uncomfortable with fluctuations", "Comfortable with fluctuations"]
        answer3 = st.radio(
            "Select your comfort level:",
            L13,
            index=False
        )
        ansList.append(L13.index(answer3))

    with st.expander("4. In uncertain market conditions, what guides your decision-making: careful analysis or a more intuitive, quick response?", expanded=True):
        L14=["Decision guided by careful analysis", "Decision guided more by intuition and quick response"]
        answer4 = st.radio(
            "Select your approach:",
            L14,
            index=False
        )
        ansList.append(L14.index(answer4))

    with st.expander("5. How open are you to exploring new or alternative investment ideas and strategies?", expanded=True):
        L15=["Not very open to exploring new strategies", "Very open to exploring new strategies"]
        answer5 = st.radio(
            "Select your approach:",
            L15,
            index=False
        )
        ansList.append(L15.index(answer5))

    if st.button("Submit"):
        st.session_state.step = None
        st.session_state.answers["step3"] = [answer1, answer2, answer3, answer4, answer5]
        print(st.session_state.answers)

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
    result = fun(ansList)
    ct = {'low':"You are a safe investor. You should try investing in Recurring Deposits, Fixed Deposits, Gold and Bonds",
          'medium':"Your personality tells that you can risk a little bit in investing. You should along with, RD, FD, Gold and Bonds, try investing in Property",
          'moderate':"Your personality trait is a moderately risk taker. You should try investing in Mid and Large Cap. For security, a small amount of your funds should be invested in Gold",
          'high':"Your personality clearly shouts that you are a high risk taker. You should try investing in Equity. Distribute your funds among Small Cap, Gold and Bonds"}
    
    
    result_category = result[0]
    st.header(ct[result_category])

    if result_category in ct:
        st.write(f"Click below to learn more about the '{result_category}' category:")
        if result_category == 'low':
            if st.button("Learn more about low-risk investing"):
                # Link to the specific page for low-risk investing
                st.write("Redirecting to low-risk investing page...")
                # Add redirection logic here

        elif result_category == 'medium':
            if st.button("Learn more about medium-risk investing"):
                # Link to the specific page for medium-risk investing
                st.write("Redirecting to medium-risk investing page...")
                # Add redirection logic here
        
        elif result_category == 'moderate':
            if st.button("Learn more about medium-risk investing"):
                # Link to the specific page for medium-risk investing
                st.write("Redirecting to medium-risk investing page...")
                # Add redirection logic here

        elif result_category == 'high':
            if st.button("Learn more about medium-risk investing"):
                # Link to the specific page for medium-risk investing
                st.write("Redirecting to medium-risk investing page...")
                # Add redirection logic here