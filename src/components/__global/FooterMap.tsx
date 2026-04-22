import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = L.divIcon({
    className: "custom-marker",
    html: `<div class="flex items-center justify-center bg-white border-2 border-red-600 rounded-full w-10 h-10 shadow-lg">
             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" class="text-red-600">
               <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
             </svg>
           </div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
});

const routeCoords: [number, number][] = [
    [-6.2440, 106.8000],
    [-6.2445, 106.8015],
    [-6.2449, 106.8023]
];

const MapResizeFix: React.FC = () => {
    const map = useMap();
    useEffect(() => {
        const timer = setTimeout(() => {
            map.invalidateSize();
        }, 300);
        window.addEventListener('resize', () => map.invalidateSize());
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', () => map.invalidateSize());
        };
    }, [map]);
    return null;
};

interface FooterMapProps {
    position: [number, number];
}

const FooterMap: React.FC<FooterMapProps> = ({ position }) => {
    return (
        <MapContainer
            center={position}
            zoom={17}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%", zIndex: 0 }}
        >
            <MapResizeFix />
            <TileLayer url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" attribution="&copy; Google Maps" />
            <Polyline positions={routeCoords} color="#C49A6C" weight={4} dashArray="10, 10" opacity={0.7} />
            <Marker position={position} icon={customIcon} />
        </MapContainer>
    );
};

export default FooterMap;
