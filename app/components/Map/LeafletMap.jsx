import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const stations = [
  { name: 'Buxoro', coords: [39.7745, 64.4286] },
  { name: 'Yangiobod', coords: [39.7000, 64.5000] },
  { name: 'Tuztepa', coords: [39.6500, 64.5500] },
  { name: 'Uchachiq', coords: [39.6000, 64.6000] },
  { name: 'Suzakdor', coords: [39.5500, 64.6500] },
  { name: 'Dautepa', coords: [39.5000, 64.7000] },
  { name: 'Miskin', coords: [39.4500, 64.7500] },
];

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const LeafletMap = () => {
  const center = [39.6, 64.6];

  return (
    <MapContainer center={center} zoom={8} scrollWheelZoom={true} className="h-full w-full z-0">
      <TileLayer
        attribution='&copy; OpenStreetMap contributors & CartoDB'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stations.map((station, idx) => (
        <Marker key={idx} position={station.coords} icon={customIcon}>
          <Popup>{station.name}</Popup>
        </Marker>
      ))}
      <Polyline positions={stations.map(s => s.coords)} color="#DDA853" weight={5} />
    </MapContainer>
  );
};

export default LeafletMap;
