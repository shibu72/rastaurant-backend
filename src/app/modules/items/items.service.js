import User from "../user/user.model.js";


// create a new item
const postItem = async (itemsData) => {
  const items = await User.create(itemsData);
  return items;
};

// get an item by its id
const getItem = async (itemId) => {
  const item = await User.findById(itemId);
  return item;
};

// get all items
const getAllItems = async () => {
    const items = await User.find();
    return items;
}

// update an item by its id
const updateItem = async (itemId, itemData) => {
  const updatedItem = await User.findByIdAndUpdate(itemId, itemData, { new: true });
  return updatedItem;
};

// delete an item by its id
const deleteItem = async (itemId) => {
  const deletedItem = await User.findByIdAndDelete(itemId);
  return deletedItem;
};

const itemServices = {
    postItem,
    getItem,
    getAllItems,
    updateItem,
    deleteItem,
}

export default itemServices;