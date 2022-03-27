const { User } = require("../models/user.model")
const addUser = async (user_first_name, user_last_name, user_phone, arr_orders = null) => {
    let user = new User({ user_first_name, user_last_name, user_phone, arr_orders });
    await user.save();
    return user;
}
const getOrdersByUserId = async (id) => {
    const arr = await User.findById(id).populate("arr_orders");
    return arr;
}
const addOrder = async (user) => {
    let checkUser = await User.findById(user._id);
    if (checkUser != null) {
        await checkUser.arr_orders.push(user.arr_orders);
    }
    else {
        addUser({ user });
    }
}