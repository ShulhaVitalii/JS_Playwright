import { test, expect } from '@playwright/test';

test('Advanced WebSocket Interaction Test', async ({ page }) => {

  const test_text = 'Test text';
  // Listen for WebSocket connections
  page.on('websocket', websocket => {
    websocket.on('framereceived', frame => {
      console.log(`Received frame: ${frame.payload}`);
      // Process received message
      if (frame.payload.includes(test_text)) {
        // Perform some validation or action
        console.log('Received specific data');
        expect(frame.payload).toContain(test_text);
      }
    });

    websocket.on('framesent', frame => {
      console.log(`Sent frame: ${frame.payload}`);
    });

    websocket.on('close', () => {
      console.log('WebSocket closed');
    });
  });

  console.log('Start here');
  

  // Go to the page that triggers WebSocket connections
  await page.goto('https://echo.websocket.org/.ws');

  // Interact with the page to trigger WebSocket messages
  await page.fill('#content', test_text)
  await page.click('#send');
  
  
  // Add any necessary wait or assertions to ensure the WebSocket interactions complete
  await page.waitForTimeout(3000); // Adjust timeout as needed

  // Additional assertions can be added here
});
