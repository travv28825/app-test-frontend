
export const getAllGateway = async () => {
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    };
    const response = await fetch("http://localhost:5200/api/gateway", requestOptions)
    const { success, data } = await response.json();
    if (success) {
        return data
    }
    return;
}

export const getOneGateway = async (serial) => {
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    };
    const response = await fetch(`http://localhost:5200/api/gateway/${serial}`, requestOptions)
    const { success, data } = response.json();

    if (success) {
        return data
    }
    return;
}

export const addGateway = async (item) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    };

    let response = await fetch(`http://localhost:5200/api/gateway`, requestOptions);
    let data = await response.json();

    return data
}
