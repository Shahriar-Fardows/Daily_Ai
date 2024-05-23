
const NewsCard = () => {
    return (
        <div className="py-5">
            <div >
                <h1 className="text-center text-2xl">Refresh the page before each new command</h1><br />
                <p className="text-center">You can find out any kind of news using the Command given down below</p><br />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 border border-sky-500 p-10">
                <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
                    <div className="p-6">
                        <header className="mb-4">
                            <h3 className="text-xl font-medium text-slate-700">
                                News by Categories
                            </h3><br />
                            <p className="text-sm text-slate-400">Categories:
                                Business, Entertainment, General, Health, Science, Sports, Technology</p>
                        </header>
                        <p>
                            Try saying:
                            Give me the latest Technology news
                        </p>
                    </div>
                </div>
                <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
                    <div className="p-6">
                        <header className="mb-4">
                            <h3 className="text-xl font-medium text-slate-700">
                                A place under the night sky
                            </h3>
                            <p className="text-sm text-slate-400">By George Johnson, jun3 28</p>
                        </header>
                        <p>
                            There’s nothing better than hiking along the rocky footpaths,
                            accompanied only by the noise of cicadas. As the boat docks in the
                            harbor, gaze upon white and blue houses, craggy cliffs, sweeping
                            olive groves, and the dazzling blues of the Aegean sea.
                        </p>
                    </div>
                </div>
                <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
                    <div className="p-6">
                        <header className="mb-4">
                            <h3 className="text-xl font-medium text-slate-700">
                                A place under the night sky
                            </h3>
                            <p className="text-sm text-slate-400">By George Johnson, jun3 28</p>
                        </header>
                        <p>
                            There’s nothing better than hiking along the rocky footpaths,
                            accompanied only by the noise of cicadas. As the boat docks in the
                            harbor, gaze upon white and blue houses, craggy cliffs, sweeping
                            olive groves, and the dazzling blues of the Aegean sea.
                        </p>
                    </div>
                </div>
                <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
                    <div className="p-6">
                        <header className="mb-4">
                            <h3 className="text-xl font-medium text-slate-700">
                                A place under the night sky
                            </h3>
                            <p className="text-sm text-slate-400">By George Johnson, jun3 28</p>
                        </header>
                        <p>
                            There’s nothing better than hiking along the rocky footpaths,
                            accompanied only by the noise of cicadas. As the boat docks in the
                            harbor, gaze upon white and blue houses, craggy cliffs, sweeping
                            olive groves, and the dazzling blues of the Aegean sea.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;