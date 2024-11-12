README.txt

NOTE: This is still in development. There are probably errors.

Meta.AI started writing the code for me.
I asked: "Build a game in HTML, CSS, and object-oriented JavaScript, where the player is a bartender who pours different ingredients into a shaker to make drinks for customers. If possible, animate the ingredients pouring into the shaker. It would be preferable to use DOM elements instead of the canvas if possible."

Meta.AI generated HTML, CSS, and JS code.
Meta.AI also gave this game description:

This code creates a game where the player is a bartender who must pour ingredients into a shaker to make drinks for customers. The game generates random orders and checks if the player has poured the correct ingredients. If the order is correct, the player's score increases; otherwise, it decreases.
When an ingredient is poured, the pourIngredient method updates the shaker's background color to a lighter version of the ingredient's color.
The serve method resets the shaker's background color to its original value (#ccc) after serving the drink.
The CSS adds a transition effect to smoothly change the shaker's background color.
This will give the visual effect of the shaker filling up with the poured ingredients.
We add the .animate-pour class to the pour element to trigger the animation.
The animationend event listener removes the pour element from the DOM after the animation completes.
This will give a basic liquid-like pouring effect using plain vanilla JavaScript and CSS animations.
