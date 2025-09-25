// Expense Tracker functionality
class ExpenseTracker {
    constructor() {
        this.expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        this.totalAmount = 0;
        
        this.initializeEventListeners();
        this.updateUI();
    }
    
    initializeEventListeners() {
        // Form submission
        document.getElementById('expense-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addExpense();
        });
        
        // Filter category change
        document.getElementById('filter-category').addEventListener('change', () => {
            this.updateUI();
        });
    }
    
    addExpense() {
        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const category = document.getElementById('category').value;
        const date = document.getElementById('date').value;
        
        if (!description || isNaN(amount) || amount <= 0 || !date) {
            alert('Please fill all fields with valid values');
            return;
        }
        
        const expense = {
            id: Date.now(),
            description,
            amount,
            category,
            date
        };
        
        this.expenses.push(expense);
        this.saveToLocalStorage();
        this.updateUI();
        
        // Reset form
        document.getElementById('expense-form').reset();
    }
    
    deleteExpense(id) {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
        this.saveToLocalStorage();
        this.updateUI();
    }
    
    saveToLocalStorage() {
        localStorage.setItem('expenses', JSON.stringify(this.expenses));
    }
    
    updateUI() {
        const filterCategory = document.getElementById('filter-category').value;
        const filteredExpenses = filterCategory === 'all' 
            ? this.expenses 
            : this.expenses.filter(expense => expense.category === filterCategory);
        
        this.calculateTotal(filteredExpenses);
        this.renderExpenses(filteredExpenses);
    }
    
    calculateTotal(expenses) {
        this.totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
        document.getElementById('total-amount').textContent = this.totalAmount.toFixed(2);
    }
    
    renderExpenses(expenses) {
        const container = document.getElementById('expenses-container');
        container.innerHTML = '';
        
        if (expenses.length === 0) {
            container.innerHTML = `
                <tr>
                    <td colspan="5" class="px-4 py-4 text-center text-gray-500">
                        No expenses found. Add your first expense!
                    </td>
                </tr>
            `;
            return;
        }
        
        expenses.forEach(expense => {
            const row = document.createElement('tr');
            
            // Format date for display
            const formattedDate = new Date(expense.date).toLocaleDateString();
            
            row.innerHTML = `
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-800">${expense.description}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-800">$${expense.amount.toFixed(2)}</td>
                <td class="px-4 py-3 whitespace-nowrap">
                    <span class="category-badge category-${expense.category}">
                        ${this.getCategoryDisplayName(expense.category)}
                    </span>
                </td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-800">${formattedDate}</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm">
                    <button class="delete-btn" data-id="${expense.id}">
                        Delete
                    </button>
                </td>
            `;
            
            container.appendChild(row);
        });
        
        // Add event listeners to delete buttons
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'));
                this.deleteExpense(id);
            });
        });
    }
    
    getCategoryDisplayName(category) {
        const names = {
            'food': 'Food & Dining',
            'transportation': 'Transportation',
            'entertainment': 'Entertainment',
            'utilities': 'Utilities',
            'other': 'Other'
        };
        
        return names[category] || category;
    }
}

// Initialize the expense tracker when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ExpenseTracker();
    
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = today;
});