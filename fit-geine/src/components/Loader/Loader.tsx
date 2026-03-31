import React from 'react';

const Loader: React.FC = () => (
    <div className="flex items-center justify-center min-h-[200px]">
        <div className="relative w-16 h-16">
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-1 border-2 border-white/5 rounded-full animate-pulse"></div>
        </div>
    </div>
);

export default Loader;
