function checkAndSendNotifications() {
    // 1. Check pending tasks
    const pendingTasks = tasks.filter(task => task.status === 'pending');

    console.log(`[Automation Log] Running scheduled check at ${new Date().toLocaleTimeString()}.`);
    console.log(`[Automation Log] Found ${pendingTasks.length} pending tasks.`);

    if (pendingTasks.length > 0) {
        // 2. Log/Send mock email notifications
        pendingTasks.forEach(task => {
            sendMockEmail(task);
        });
    }
}

function sendMockEmail(task) {
    // In a real application, this is where you would make an 
    // AJAX (fetch/axios) request to your backend API to send an actual email.

    // This is a client-side simulation:
    console.log(`[Mock Email Sent] To: user@example.com (Simulated)`);
    console.log(`Subject: Reminder: Task "${task.title}" is pending.`);
    console.log(`Body: Description: ${task.description}. Due Date: ${task.dueDate || 'N/A'}`);
    console.log('--------------------------------------------------');
}

// 3. Trigger the function every 20 minutes (1,200,000 milliseconds)
const TWENTY_MINUTES_IN_MS = 1200000;

// Set up the interval timer
const automationIntervalId = setInterval(checkAndSendNotifications, TWENTY_MINUTES_IN_MS);

// Optional: Run immediately once when the dashboard loads for testing/initial check
checkAndSendNotifications(); 

// Optional: A good practice is to clear the interval when necessary, 
// e.g., during logout or if the component unmounts in a framework.
function logout() {
    clearInterval(automationIntervalId); // Stop the automation timer on logout
    // ... rest of your logout logic ...
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}
