'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const position = [39.732306, 64.567444];

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
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="h-full w-full z-0">
      <TileLayer
        url="https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=6S2xjYozThqslJVRn7HK"
        attribution="© MapTiler © OpenStreetMap contributors"

      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          Lokatsiya: 39°43'56.3"N 64°34'02.8"E
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
