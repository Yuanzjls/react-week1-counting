# React week 1 project counting people

As pandemic, many places only allow certain amount of people in to prevent infecting. Then this app is built for people easily manage people flow.

## Components

In this project, I designed two components, one is the button for reset, plus, and minus, and another one is the text for displaying status.

### Button

Because we have three buttons(reset plus and minus) on the screen, and all of them control the current number of people, but have different OnClick function. So I designed three function, and give each component respectively. As every button has different text on it, so I also make button to accept three functions respectively. I also pass button type to make buttons have different display styles.

In order to test effective, I add Access key to each button, so button can be controlled by keyboard.

### Text

Text component will display the number of people currently in, and based on the number of people, it will give warning or welcome message.
