import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FiTrash2 } from "react-icons/fi";
import "./List.css";

const FoodTable = () => {
  const url = import.meta.env.VITE_API_URL;
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching food list");
      }
    } catch (error) {
      toast.error("Failed to fetch data");
    }
  };

  const removeFood = async (foodId) => {
    try {
      const response = await axios.delete(`${url}/api/food/remove`, {
        data: { id: foodId }, // ✅ Correct way to send data
      });

      if (response.data.success) {
        toast.success("Food item removed successfully");
        await fetchList(); // ✅ Refresh list
      } else {
        toast.error("Failed to remove food item");
      }
    } catch (error) {
      toast.error("Error removing food item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="food-table-container">
      <h2>All Foods List</h2>
      <div className="food-table">
        <div className="food-table-header">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>

        {list.length > 0 ? (
          list.map((item, index) => (
            <div key={index} className="food-table-row">
              <img src={item.image} alt={item.name} />{" "}
              {/* ✅ Ensure correct URL */}
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <button
                onClick={() => removeFood(item._id)}
                className="delete-btn"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          ))
        ) : (
          <p className="no-data">No food items found.</p>
        )}
      </div>
    </div>
  );
};

export default FoodTable;
