
export const getAllGateway = async () => {
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    };
    try {
        const response = await fetch("http://localhost:5200/api/gateway", requestOptions)
        const { success, data } = await response.json();
        if (success) {
            return data
        }
        return;
    } catch (error) {

        return { message: `Error: ${error}` }
    }
}

export const getOneGateway = async (serial) => {
    try {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        };
        const response = await fetch(`http://localhost:5200/api/gateway/${serial}`, requestOptions)
        const { success, data, message } = await response.json();

        if (success) {
            return data
        }
        return;
    } catch (error) {

        return { message: `Error: ${error}` }
    }

}

export const addGateway = async (item) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    };
    try {
        const response = await fetch(`http://localhost:5200/api/gateway`, requestOptions);
        const data = await response.json();
        return data
    } catch (error) {

        return { message: `Error: ${error}` }
    }
}

export const updateGateway = async (item) => {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    };
    try {
        const response = await fetch(`http://localhost:5200/api/gateway`, requestOptions);
        const data = await response.json();
        return data;
    } catch (error) {
        return { message: `Error: Error with the server, try again later` }
    }

}

export const deleteGateway = async (serial) => {
    const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    };
    try {
        const response = await fetch(`http://localhost:5200/api/gateway/${serial}`, requestOptions);
        const data = await response.json();

        return data
    } catch (error) {

        return { message: `Error: ${error}` }
    }

}