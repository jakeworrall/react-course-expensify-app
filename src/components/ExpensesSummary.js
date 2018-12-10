import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from "../selectors/expenses";
import {connect} from 'react-redux';
import React from "react";
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    const numberOfExpenses = props.expenses.length;
    const total = selectExpensesTotal(props.expenses);
    return (
        <div>
            Viewing {numberOfExpenses} {numberOfExpenses === 1 ? 'expense':'expenses'} totalling {numeral(total/100).format('$0,0.00')}
        </div>
    );
};

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);