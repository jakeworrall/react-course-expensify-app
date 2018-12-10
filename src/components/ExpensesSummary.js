import React from "react";
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => (
    <div>
        Viewing {expenseCount} {expenseCount === 1 ? 'expense':'expenses'} totalling {
        numeral(expensesTotal/100).format('$0,0.00')}
    </div>
);

const mapStateToProps = (state) => ({
    expenseCount: state.expenses.length,
    expensesTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);