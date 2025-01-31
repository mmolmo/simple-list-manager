## Overview

A React component that displays a filterable list of menu items. Users can add new items and filter the existing items using a search bar with case-insensitive regex matching.

## Features

- Display a list of menu items
- Add new items to the list
- Filter items using case-insensitive search
- Regular expression pattern matching
- Clear input fields after adding items

# Installing Dependencies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Run `npm install` to install all dependencies.

## Available Scripts

In the project directory story-app, you can run `npm start` to launch the app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Component Structure

### State Management

The component uses three state hooks:
- `newMenuItem`: Manages the input field for adding new items
- `menuItems`: Stores the array of all menu items
- `filter`: Manages the search/filter input value

### Key Functions

- `addMenuItem`: Callback function that adds new items to the list
  - Takes an item parameter
  - Trims whitespace
  - Adds valid items to the menuItems array
  - Dependencies tracked via useCallback

### Filtering

- Case-insensitive filtering using RegExp
- Shows all items when filter is empty
- Shows only matching items when filter has content
- Uses pattern: `new RegExp(filter, 'i').test(item)`

### User Interface

The component renders:

- A list display showing all or filtered items
- An input field for adding new items
- An "Add Item" button
- A filter/search input field

## Dependencies

- create-react-app

