
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
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    };
    try {
        const response = await fetch(`http://localhost:5200/api/gateway/${serial}`, requestOptions)
        const { success, data } = response.json();

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
        let response = await fetch(`http://localhost:5200/api/gateway`, requestOptions);
        let data = await response.json();

        return data
    } catch (error) {

        return { message: `Error: ${error}` }
    }
}

export const updateGateway = async (serial) => {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(serial),
    };
    try {
        let response = await fetch(`http://localhost:5200/api/gateway`, requestOptions);
        let { success, message } = await response.json();
        if (success) return { message }

        return
    } catch (error) {

        return { message: `Error: ${error}` }
    }

}

export const deleteGateway = async (item) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    };
    try {
        let response = await fetch(`http://localhost:5200/api/gateway`, requestOptions);
        let { success, message } = await response.json();

        if (success) return { message }
        return
    } catch (error) {

        return { message: `Error: ${error}` }
    }

}