import ItemDevice from "./ItemDevice";

export default ({ listD, addDeviceToGateway }) => (
    <div className="add_devices_list">
        <div className="device_list">
            {listD ? (
                listD.length > 0 ? (
                    <ul className="list_d">
                        {listD.map((device, index) => (
                            <ItemDevice
                                inList={true}
                                addToGateway={addDeviceToGateway}
                                key={index}
                                device={device}
                            />
                        ))}
                    </ul>
                ) : (
                    <p>Device list is empty</p>
                )
            ) : (
                <p> Waiting for devices list</p>
            )}
        </div>
    </div>
)