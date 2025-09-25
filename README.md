# Personal Expense Tracker 💰

A simple, client-side web application for tracking personal expenses, built with **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**. This tracker allows users to record, filter, and delete expenses, with data persisting in the browser's local storage.

---

## ✨ Features

* **Add Expenses:** Easily add new expenses with a description, amount, category, and date.
* **Persistent Data:** All expense data is saved in the browser's **Local Storage**, so it remains even if the page is closed and reopened.
* **Total Calculation:** Automatically calculates and displays the total amount spent.
* **Category Filtering:** Filter the expense list to view spending by specific categories (e.g., Food, Transportation, Utilities).
* **Delete Functionality:** Remove individual expense entries from the list.
* **Responsive Design:** Styled using **Tailwind CSS** for a clean, mobile-friendly interface.

---

## 🛠️ Technologies Used

* **HTML5:** For the basic structure and semantic markup.
* **Tailwind CSS:** A utility-first CSS framework for rapid styling.
* **Vanilla JavaScript:** For all application logic, including expense management, storage, and UI updates.

---

## 🚀 Getting Started

This project is entirely client-side, meaning it runs directly in your web browser.

### Prerequisites

You only need a modern web browser (like Chrome, Firefox, Edge, etc.) to run this application.

### Installation and Setup

1.  **Clone the Repository (or download the files):**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/personal-expense-tracker.git](https://github.com/YOUR_USERNAME/personal-expense-tracker.git)
    cd personal-expense-tracker
    ```
2.  **Open in Browser:** Locate the `index.html` file in the project folder and **open it directly in your web browser**.

    *(Since all scripts and styles are linked locally or via CDN, no local server is required.)*

---

## 💻 Usage

### Adding an Expense

1.  In the **Add New Expense** section (left column), fill out the form:
    * **Description:** Name of the purchase (e.g., "Dinner at Joe's").
    * **Amount ($):** The cost (e.g., 25.50).
    * **Category:** Select the relevant category (e.g., Food & Dining).
    * **Date:** Select the date of the expense.
2.  Click the **Add Expense** button.
3.  The new expense will appear in the **Expenses Summary** table (right column), and the **Total Expenses** will update.

### Viewing and Filtering

* The **Expenses Summary** section displays a table of all recorded expenses.
* Use the **Filter by Category** dropdown menu above the table to view only expenses belonging to a specific category. Selecting *"All Categories"* will show every expense.

### Deleting an Expense

* To remove an expense, find the corresponding row in the table and click the **Delete** button in the **Actions** column.

---

## 📂 Project Structure
