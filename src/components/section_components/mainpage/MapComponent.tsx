import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

// Fix for default marker icons in Leaflet with Webpack/Vite
import icon from 'leaflet/dist/images/marker-icon.webp';
import iconShadow from 'leaflet/dist/images/marker-shadow.webp';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const routeCoords: [number, number][] = [
  [-6.2440, 106.8000],
  [-6.2445, 106.8015],
  [-6.2449, 106.8023]
];

// Helper component to fix Leaflet size issues
const MapResizeFix: React.FC = () => {
  const map = useMap();
  useEffect(() => {
    if (map.attributionControl) {
      map.attributionControl.setPrefix(false);
    }

    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 300);

    let ticking = false;
    const handleResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          map.invalidateSize();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [map]);
  return null;
};

const MapComponent: React.FC = () => {
  const position: [number, number] = [-6.2449, 106.8023]; // Precise Darmawangsa Square coordinates

  const buildingIcon = L.divIcon({
    html: `<div class="flex items-center justify-center bg-white border-2 border-red-600 rounded-full w-10 h-10 shadow-lg">
             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1.25rem" width="1.25rem" xmlns="http://www.w3.org/2000/svg" class="text-red-600">
               <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
             </svg>
           </div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    className: 'custom-marker-icon'
  });

  return (
    <div className="w-full h-[28.125rem] overflow-hidden relative">
      <MapContainer
        center={position}
        zoom={17}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', zIndex: 0 }}
      >
        <MapResizeFix />
        <TileLayer
          attribution='&copy; Google Maps'
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        />
        <Polyline
          positions={routeCoords}
          color="#C49A6C"
          weight={4}
          dashArray="10, 10"
          opacity={0.7}
        />
        <Marker position={position} icon={buildingIcon}>
          <Popup>
            <div className="text-black p-1">
              <strong className="block text-sm font-bold">Pergadaian Utama Indonesia(PUI)</strong>
              <p className="text-xs mt-1">The Darmawangsa Square Lt.2 No.263-264</p>
              <p className="text-xs text-gray-500">Jakarta Selatan 12160</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Map Information Card Overlay */}
      <div className="absolute top-6 right-4 md:right-8 z-[1000] w-[20rem] md:w-[23.75rem] bg-white/70 backdrop-blur-2xl border border-white/50 p-4 md:p-5 rounded-[1.875rem] shadow-[0_15px_40px_rgba(0,0,0,0.12)] pointer-events-auto transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] group">
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="text-[#003D35] font-black text-lg md:text-xl mb-0.5 group-hover:text-[#C49A6C] transition-colors duration-300">Kantor Pusat PUI</h3>
            <div className="h-1 w-10 bg-[#C49A6C] rounded-full"></div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3 items-start group/item">
              <div className="bg-[#003D35] text-white p-2 rounded-xl shadow-md group-hover/item:bg-[#C49A6C] transition-all duration-300">
                <FaMapMarkerAlt size={14} />
              </div>
              <div>
                <p className="text-[0.5625rem] uppercase tracking-widest text-gray-500 font-bold mb-0">Lokasi</p>
                <p className="text-[0.6875rem] md:text-xs text-[#003D35] font-semibold leading-relaxed">
                  The Darmawangsa Square Lt.2 No.263-264, Jakarta Selatan 12160
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start group/item">
              <div className="bg-[#003D35] text-white p-2 rounded-xl shadow-md group-hover/item:bg-[#C49A6C] transition-all duration-300">
                <FaClock size={14} />
              </div>
              <div className="flex-1">
                <p className="text-[0.5625rem] uppercase tracking-widest text-gray-500 font-bold mb-0">Jam Operasional</p>
                <div className="space-y-0.5 mt-0.5">
                  <p className="text-[0.6875rem] md:text-xs text-[#003D35] font-semibold flex justify-between gap-4">
                    <span>Senin - Jumat:</span>
                    <span className="text-[#C49A6C]">10:00 - 17:30</span>
                  </p>
                  <p className="text-[0.6875rem] md:text-xs text-[#003D35] font-semibold flex justify-between gap-4">
                    <span>Sabtu - Minggu:</span>
                    <span className="text-[#C49A6C]">By Appointment</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#003D35]/5 space-y-2">
              <div className="flex gap-2 items-center group/subitem">
                <FaPhone className="text-[#C49A6C] group-hover/subitem:scale-110 transition-transform" size={12} />
                <p className="text-[0.6875rem] md:text-xs text-[#003D35] font-bold">
                  +62 822 7777 7911
                </p>
              </div>
              <div className="flex gap-2 items-center group/subitem">
                <FaEnvelope className="text-[#C49A6C] group-hover/subitem:scale-110 transition-transform" size={12} />
                <p className="text-[0.6875rem] md:text-xs text-[#003D35] font-medium italic">
                  marketing@pui.co.id
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
