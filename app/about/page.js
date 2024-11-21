import Image from "next/image";

export default function About() {
    return (
        <div className="text-white bg-gradient-to-b from-indigo-900 via-purple-900 to-gray-900 min-h-screen">
        {/* Hero Section */}
            <div className="flex flex-col justify-center items-center gap-6 px-4 py-12 text-center">
                <h1 className="text-6xl font-extrabold tracking-widest drop-shadow-lg">About Us</h1>
                <p className="font-mono text-2xl max-w-2xl mx-auto tracking-wide leading-relaxed">
                At <span className="text-purple-400 font-bold">Buy Me a Chai</span>, we empower creators to connect with their supporters in meaningful ways. 
                Whether you're an artist, a writer, or just someone with a passion to share, our platform makes it simple to get funded while enjoying your favorite brew.
                </p>
            </div>

            {/* Mission Section */}
            <section className="py-12 px-6 bg-gradient-to-r from-purple-900 to-indigo-900 text-center">
                <h2 className="text-4xl font-extrabold tracking-wider mb-6">Our Mission</h2>
                <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                Our mission is to provide creators with a safe, secure, and hassle-free platform to share their journey and get rewarded by their followers. 
                We believe in empowering creativity, one sip at a time.
                </p>
            </section>

            {/* Vision Section */}
            <section className="py-12 px-6 text-center">
                <h2 className="text-4xl font-extrabold tracking-wider mb-6">Our Vision</h2>
                <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                To build a world where creators can focus on their passion without financial hurdles. With <span className="text-purple-400">Buy Me a Chai</span>, 
                we envision a global community of supporters and creators inspiring each other.
                </p>
            </section>

            {/* Core Values */}
            <section className="py-12 px-6 bg-gradient-to-r from-gray-900 to-purple-900 text-center">
                <h2 className="text-4xl font-extrabold tracking-wider mb-6">Our Core Values</h2>
                <div className="flex flex-wrap justify-center gap-8 mt-8">
                    <div className="max-w-sm bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-200 p-6">
                        <h3 className="text-2xl font-bold mb-4">Creativity</h3>
                        <p>We celebrate the uniqueness of every creator and strive to support their journey.</p>
                    </div>
                    <div className="max-w-sm bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-200 p-6">
                        <h3 className="text-2xl font-bold mb-4">Trust</h3>
                        <p>Your security and privacy are at the heart of everything we do.</p>
                    </div>
                    <div className="max-w-sm bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-200 p-6">
                        <h3 className="text-2xl font-bold mb-4">Community</h3>
                        <p>We believe in fostering connections between creators and their supporters.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 px-6 text-center">
                <h2 className="text-4xl font-extrabold tracking-wider mb-6">Join Us</h2>
                <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                Whether you're a creator looking for support or a fan wanting to make a difference, <span className="text-purple-400">Buy Me a Chai</span> is your go-to platform.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-6 py-3 shadow-md hover:shadow-lg transition duration-200">
                        Get Started
                    </button>
                    <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-6 py-3 shadow-md hover:shadow-lg transition duration-200">
                        Learn More
                    </button>
                </div>
            </section>
        </div>
    );
}
