document.addEventListener('DOMContentLoaded', function() {
    const spendingList = document.getElementById('spendingList');
    const addSpendingBtn = document.getElementById('addSpendingBtn');
    const popupForm = document.getElementById('popupForm');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const submitSpendingBtn = document.getElementById('submitSpendingBtn');
    const titleInput = document.getElementById('titleInput');
    const amountInput = document.getElementById('amountInput');

    // Display popup form
    addSpendingBtn.addEventListener('click', function() {
        popupForm.style.display = 'block';
    });

    // Close popup form
    closePopupBtn.addEventListener('click', function() {
        popupForm.style.display = 'none';
    });

    // Add spending
    submitSpendingBtn.addEventListener('click', function() {
        const title = titleInput.value;
        const amount = parseFloat(amountInput.value);

        if (title.trim() === '' || isNaN(amount)) {
            alert('Please enter valid data.');
            return;
        }

        const timestamp = new Date().toLocaleString();
        const newItem = `
            <div>
                <p>Title: ${title}</p>
                <p>Amount: $${amount}</p>
                <p>Date: ${timestamp}</p>
                <button class="deleteBtn">Delete</button>
            </div>
        `;

        spendingList.insertAdjacentHTML('beforeend', newItem);

        titleInput.value = '';
        amountInput.value = '';
        popupForm.style.display = 'none';
    });
    document.addEventListener('DOMContentLoaded', function() {
        const ctx = document.getElementById('myChart').getContext('2d');
    
        const data = {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
            datasets: [{
                label: 'Spending',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                data: [10, 20, 30, 25, 35, 45], // Replace this with your spending data
                borderWidth: 1
            }]
        };
    
        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };
    
        const myChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    });
    

    // Delete spending
    spendingList.addEventListener('click', function(event) {
        if (event.target.classList.contains('deleteBtn')) {
            event.target.parentNode.remove();
        }
    });
});
