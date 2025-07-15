const Footer = () => {
    return (
        <footer className="flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-900">
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8">
                <hr className="h-px bg-gray-200 border-none my-7 dark:bg-gray-700" />

                <div className="flex flex-col items-center justify-between md:flex-row">
                    <a href="#">
                        <h1 className="text-2xl font-medium text-slate-700">TastyNest</h1>
                    </a>

                    <div className="flex mt-4 md:m-0">
                        <div className="-mx-4">
                            <a
                                href="#"
                                className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
                            >
                                Blog
                            </a>
                            <a
                                href="#"
                                className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
                            >
                                News
                            </a>
                            <a
                                href="#"
                                className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;