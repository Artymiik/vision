import Close from "../../constants/svgs/close"

const LastErrors = () => {
    return (
        <>
            <div className="mt-[5rem] flex flex-col gap-5">
                <p className="text-[1.2rem] font-semibold">Last Errors</p>

                <div className="flex flex-col gap-1">
                    <div className="bg-[#ff000036] hover:bg-[#ff000017] transition p-3 rounded-md cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#4b0000] p-1 rounded-[50%]">
                                <Close fill="#ff00005e" />
                            </div>
                            <p>Error register user: email and username not found</p>
                        </div>
                    </div>

                    <div className="bg-[#ff000036] hover:bg-[#ff000017] transition p-3 rounded-md cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#4b0000] p-1 rounded-[50%]">
                                <Close fill="#ff00005e" />
                            </div>
                            <p>Error register user: email and username not found</p>
                        </div>
                    </div>

                    <div className="bg-[#ff000036] hover:bg-[#ff000017] transition p-3 rounded-md cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#4b0000] p-1 rounded-[50%]">
                                <Close fill="#ff00005e" />
                            </div>
                            <p>Error register user: email and username not found</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LastErrors
