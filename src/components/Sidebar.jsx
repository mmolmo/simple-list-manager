import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  let [newMenuItem, setNewMenuItem] = useState("")
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  // the initial menu items is an array prop passed from app js to the sidebar.
  let [menuItems, setMenuItems] = useState(initialMenuItems)

  let [filter, setFilter] = useState("")
  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.

  let addMenuItem = useCallback(() => {
    //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
    //   // This involves adding a parameter and changing a class instance variable (props).
    //   setMenuItems([item, ...menuItems])

    if (newMenuItem.trim()) {  // Only add if there's actual content
      setMenuItems([...menuItems, newMenuItem])
      setNewMenuItem("")  
      // Clear the input after adding
      console.log("Added menu item:", newMenuItem)
      console.log(menuItems)
    }
  }, [newMenuItem, menuItems])

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.

  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.

  //setArtists(
  //  artists.filter(a =>
  //    a.id !== artist.id
  //  )
  //);

  return (
    <div>
      <ul 
        id = "listDisplay"
      >
        {filter === "" 
          ? menuItems.map((item, index) => <li key={index}>{item}</li>)
          : menuItems
            //.filter(item => item.toLowerCase().includes(filter.toLowerCase())) does the same thing without regex.
            .filter(item => new RegExp(filter, 'i').test(item))
            .map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button
        onClick={() => {
          /* TODO: 3 */
          //runs this function
          addMenuItem()
        }}
      >
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
    </div>
  )
}
