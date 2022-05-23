export const getAllDevice = async () => {
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    };
    try {
        const response = await fetch("http://localhost:5200/api/device", requestOptions)
        const data = await response.json();

        return data
    } catch (error) {
        return { message: `Error: ${error}` }
    }
}

export const getOneDevice = async (serial) => {
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    };
    try {
        const response = await fetch(`http://localhost:5200/api/device/${serial}`, requestOptions)
        const data = await response.json();

        return data
    } catch (error) {
        return { message: `Error: ${error}` }
    }
}

export const addDevice = async (item) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    };
    try {
        let response = await fetch(`http://localhost:5200/api/device`, requestOptions);
        let data = await response.json();

        return data
    } catch (error) {
        return { message: `Error: ${error}` }
    }
}

export const updateDevice = async (item) => {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    };
    try {
        const response = await fetch(`http://localhost:5200/api/device/${item.uid}`, requestOptions);
        const data = await response.json();
        
        return data;
    } catch (error) {
        return { message: `Error: Error with the server, try again later` }
    }

}

export const deleteDevice = async (uid) => {
    const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    };
    try {
        const response = await fetch(`http://localhost:5200/api/device/${uid}`, requestOptions);
        const data = await response.json();

        return data
    } catch (error) {
        return { message: `Error: ${error}` }
    }

}