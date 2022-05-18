
export const getAllDevice = async () => {
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    };
    const response = await fetch("http://localhost:5200/api/device", requestOptions)
    const data = await response.json();

    if (data.success) {
        return data.data
    }
    return;
}

export const getOneDevice = async (serial) => {
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    };
    const response = await fetch(`http://localhost:5200/api/device/${serial}`, requestOptions)
    const { success, data } = response.json();

    if (success) {
        return data
    }
    return;
}

export const addDevice = async (item) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    };

    let response = await fetch(`http://localhost:5200/api/device`, requestOptions);
    let data = await response.json();

    return data
}
