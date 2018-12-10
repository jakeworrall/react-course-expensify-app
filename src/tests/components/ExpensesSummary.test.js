import {ExpensesSummary} from "../../components/ExpensesSummary";
import {shallow} from "enzyme/build";
import React from "react";

test('should display summary from 1 expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expensesTotal={109500} expenseCount={1}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should display summary from multiple expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expensesTotal={114195} expenseCount={3}/>);
    expect(wrapper).toMatchSnapshot();
});