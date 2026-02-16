import useIsOnline from '../../hooks/useIsOnline'

function OfflinePage( { onRetry } ) {

    return (
        <div className="min-h-screen flex items-center justify-center bg-mainbg font-sans">
            <div className="bg-card-bg w-80 p-10 rounded-xl shadow-lg text-center">
                <h1 className="text-2xl font-semibold text-white mb-2">You're Offline</h1>
                <p className="text-sm text-white mb-6">Please check internet connection.</p>
                <button className="px-5 py-2 rounded-lg bg-save-update-btn text-white text-sm hover:brightness-75 cursor-pointer" 
                onClick={onRetry}>
                    Retry
                </button>
            </div>
        </div>
    )
}

export default OfflinePage
