import React, { useEffect, useState } from 'react';
import { Play, Download, Youtube, Zap, Shield, Video, Star, Settings, Users, Clock, Check, Laptop, Monitor, Layers, Shuffle, Volume2, Subtitles, FastForward, Terminal, AppWindow, Apple, } from 'lucide-react';

function detectOS() {
  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = window.navigator.platform.toLowerCase();

  if (userAgent.includes('win')) return 'windows';
  if (userAgent.includes('mac')) return 'mac';
  if (userAgent.includes('linux') || platform.includes('linux')) return 'linux';
  
  return 'unknown';
}

function getDownloadLink(os) {
  switch(os) {
    case 'windows':
      return '/VC Player Setup 1.0.0.exe';
    case 'linux':
      return '/VC Player-1.0.0.AppImage';
    case 'mac':
      return '/VC Player-1.0.0.dmg';  // Assuming this file exists
    default:
      return null;
  }
}

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [detectedOS, setDetectedOS] = useState('unknown');
  const [downloadLink, setDownloadLink] = useState(null);

  useEffect(() => {
    const os = detectOS();
    console.log(os)
    setDetectedOS(os);
    setDownloadLink(getDownloadLink(os));
    setIsVisible(true);
  }, []);

  const osDetails = {
    windows: { 
      icon: AppWindow, 
      name: 'Windows', 
      versions: ['Windows 11/10/8'], 
      color: 'blue' 
    },
    mac: { 
      icon: Apple, 
      name: 'macOS', 
      versions: ['macOS 12+'], 
      color: 'gray' 
    },
    linux: { 
      icon: Terminal, 
      name: 'Linux', 
      versions: ['Ubuntu', 'Fedora', 'Arch'], 
      color: 'purple' 
    },
    unknown: { 
      icon: Laptop, 
      name: 'Autre Système', 
      versions: ['Téléchargement manuel'], 
      color: 'gray' 
    }
  };

  const currentOSDetails = osDetails[detectedOS] || osDetails.unknown;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40 z-0 animate-gradient-shift" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(100,50,255,0.1),transparent_50%)] animate-pulse-ring" />
        
        <div className="relative container mx-auto px-6 py-24 z-10">
          <nav className="flex justify-between items-center mb-16 animate-slide-up opacity-0" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 blur-lg opacity-50 animate-pulse"></div>
                <Video className="w-8 h-8 text-purple-500 relative animate-spin-slow" />
              </div>
              <span className="text-xl font-bold hover-lift">VC Player</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors hover-lift">Fonctionnalités</a>
              <a href="#download" className="text-gray-300 hover:text-white transition-colors hover-lift">Télécharger</a>
              <div className="flex gap-2">
                <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2">
                  <AppWindow className="w-4 h-4" />
                  Windows
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105">
                  <Apple className="w-4 h-4" />
                  macOS
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105">
                  {/* <Linux className="w-4 h-4" /> */}
                  Linux
                </button>
              </div>
            </div>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6 animate-slide-up opacity-0" style={{ animationDelay: '400ms' }}>
              <span className="px-4 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium hover-scale">
                Nouveau
              </span>
              <span className="text-gray-400">Version 2.0 disponible pour toutes les plateformes</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animated-gradient-text animate-slide-up opacity-0" style={{ animationDelay: '600ms' }}>
              Le Lecteur Vidéo Nouvelle Génération
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-slide-up opacity-0" style={{ animationDelay: '800ms' }}>
              Une alternative moderne à VLC. Profitez d'une interface élégante et de performances exceptionnelles sur Windows, macOS et Linux. Lecture fluide de tous vos formats vidéo préférés.
            </p>
            <div className="flex gap-4 mb-12 animate-slide-up opacity-0" style={{ animationDelay: '1000ms' }}>
              <button onClick={() => window.open(downloadLink?downloadLink:'/', '_blank')} className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Télécharger
              </button>
              <button className="border border-purple-500 hover:bg-purple-500/20 px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105">
                <Play className="w-5 h-5" />
                Voir la démo
              </button>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400 animate-slide-up opacity-0" style={{ animationDelay: '1200ms' }}>
              <div className="flex items-center gap-2 hover-lift">
                <Check className="w-4 h-4 text-purple-400" />
                Open Source
              </div>
              <div className="flex items-center gap-2 hover-lift">
                <Check className="w-4 h-4 text-purple-400" />
                Multi-plateforme
              </div>
              <div className="flex items-center gap-2 hover-lift">
                <Check className="w-4 h-4 text-purple-400" />
                Formats illimités
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Download Showcase */}
      <div className="container mx-auto px-6 py-24 bg-gray-900">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up opacity-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center">
                <Youtube className="w-10 h-10 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold animated-gradient-text">
                Téléchargement YouTube Ultime
              </h2>
            </div>
            <p className="text-xl text-gray-300 mb-6">
              Transformez n'importe quelle vidéo YouTube en fichier téléchargeable avec une simplicité déconcertante. VC Player révolutionne le téléchargement vidéo.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  icon: Zap,
                  title: 'Extraction Rapide',
                  description: 'Téléchargez des vidéos en quelques secondes, sans compromis sur la qualité.'
                },
                {
                  icon: Shield,
                  title: 'Légal & Sécurisé',
                  description: 'Respect des droits d\'auteur et téléchargements conformes aux règles YouTube.'
                },
                {
                  icon: FastForward,
                  title: 'Formats Multiples',
                  description: 'MP4, WebM, MP3 - Choisissez le format qui vous convient.'
                },
                {
                  icon: Star,
                  title: 'Qualité Garantie',
                  description: 'Préservez la résolution originale jusqu\'à 4K et 60 FPS.'
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Télécharger des Vidéos
              </button>
              <button className="border border-red-500 hover:bg-red-500/20 px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105">
                <Users className="w-5 h-5" />
                Voir la Démo
              </button>
            </div>
          </div>
          <div className="relative animate-scale-up opacity-0">
            <div className="absolute -inset-2 bg-purple-500/20 rounded-3xl blur-2xl animate-pulse"></div>
            <div className="relative bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
              <div className="p-6 bg-gray-900/50 backdrop-blur-sm flex items-center justify-between border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <Youtube className="w-6 h-6 text-red-500" />
                  <span className="font-semibold">YouTube Downloader</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">Temps restant: 45s</span>
                </div>
              </div>
              <div className="p-6">
                <div className="bg-gray-700/50 rounded-xl p-4 mb-4">
                  <input 
                    type="text" 
                    placeholder="Collez l'URL de la vidéo YouTube" 
                    className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {['720p', '1080p', 'MP3'].map((quality, index) => (
                    <button 
                      key={index} 
                      className="bg-gray-700 hover:bg-purple-500/20 rounded-lg py-2 text-sm transition-colors"
                    >
                      {quality}
                    </button>
                  ))}
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '65%'}}></div>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-full font-medium transition-colors">
                  Télécharger
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Support */}
      <div className="border-y border-gray-800 bg-gray-800/30">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-3 gap-8">
            {[
              { icon: Monitor, platform: 'Windows', features: ['Windows 11/10/8', 'Intel & AMD', 'Portable'] },
              { icon: Laptop, platform: 'macOS', features: ['macOS 12+', 'Intel & M1/M2', 'App Store'] },
              { icon: Terminal, platform: 'Linux', features: ['Ubuntu', 'Fedora', 'Arch'] }
            ].map((os, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 animate-scale-up opacity-0" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <os.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{os.platform}</h3>
                <ul className="text-gray-400 space-y-2">
                  {os.features.map((feature, i) => (
                    <li key={i} className="text-sm">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OS Detection and Download Section */}
      <div className="container mx-auto px-6 py-24 bg-gray-900">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 animated-gradient-text">
            Téléchargement Détecté Automatiquement
          </h2>
          <p className="text-gray-400">
            Nous avons détecté votre système {currentOSDetails.name} et préparé le téléchargement adapté.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 flex flex-col items-center text-center">
            <div className={`w-24 h-24 bg-${currentOSDetails.color}-500/20 rounded-full flex items-center justify-center mb-6`}>
              <currentOSDetails.icon className={`w-12 h-12 text-${currentOSDetails.color}-500`} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{currentOSDetails.name}</h3>
            <div className="mb-6">
              {currentOSDetails.versions.map((version, index) => (
                <div key={index} className="text-gray-400 mb-2">{version}</div>
              ))}
            </div>
            {downloadLink ? (
              <a 
                href={downloadLink} 
                download 
                className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Download className="w-5 h-5" />
                Télécharger pour {currentOSDetails.name}
              </a>
            ) : (
              <a 
                href="/downloads" 
                className="border border-purple-500 hover:bg-purple-500/20 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                Voir Tous les Téléchargements
              </a>
            )}
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <h4 className="text-xl font-semibold mb-6 text-center">
              Autres Options de Téléchargement
            </h4>
            <div className="space-y-4">
              {Object.entries(osDetails)
                .filter(([key]) => key !== detectedOS && key !== 'unknown')
                .map(([key, os]) => (
                  <div 
                    key={key} 
                    className="flex items-center justify-between bg-gray-700/50 p-4 rounded-xl hover:bg-gray-700/70 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <os.icon className={`w-8 h-8 text-${os.color}-500`} />
                      <span className="font-medium">{os.name}</span>
                    </div>
                    <a 
                      href={getDownloadLink(key)} 
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Télécharger
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up opacity-0">
          <h2 className="text-3xl font-bold mb-4 animated-gradient-text">Fonctionnalités Avancées</h2>
          <p className="text-gray-400">
            Découvrez pourquoi VC Player est le choix idéal pour remplacer votre lecteur vidéo actuel.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: Layers,
              title: 'Tous les Formats',
              description: 'Support natif de tous les formats vidéo et codecs populaires.',
              features: ['MKV, MP4, AVI', 'HEVC, VP9, AV1', 'HDR & Dolby Vision']
            },
            {
              icon: Zap,
              title: 'Performance Optimale',
              description: 'Lecture fluide et démarrage instantané grâce au moteur optimisé.',
              features: ['Accélération GPU', 'Faible utilisation CPU', 'Mode éco-énergie']
            },
            {
              icon: Settings,
              title: 'Personnalisation',
              description: 'Interface modulaire adaptable à vos besoins.',
              features: ['Thèmes personnalisés', 'Raccourcis clavier', 'Extensions']
            },
            {
              icon: Shuffle,
              title: 'Playlists Avancées',
              description: 'Organisez et gérez vos collections vidéo.',
              features: ['Playlists intelligentes', 'Auto-organisation', 'Tags & filtres']
            },
            {
              icon: Volume2,
              title: 'Audio Premium',
              description: 'Support audio haute fidélité et configurations multi-canaux.',
              features: ['Dolby Atmos', 'DTS-X', 'Configuration 7.1']
            },
            {
              icon: Subtitles,
              title: 'Sous-titres Pro',
              description: 'Gestion avancée des sous-titres et synchronisation automatique.',
              features: ['Multi-langues', 'Auto-sync', 'Styles personnalisés']
            },
            {
              icon: Youtube,
              title: 'Téléchargement YouTube',
              description: 'Téléchargez facilement des vidéos YouTube en quelques clics.',
              features: ['Haute qualité', 'Formats multiples', 'Extraction rapide']
            }
          ].map((feature, index) => (
            <div key={index} 
                 className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm group hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 animate-scale-up opacity-0" 
                 style={{ animationDelay: `${index * 200}ms` }}>
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <ul className="space-y-2 text-sm text-gray-400">
                {feature.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                    <Check className="w-4 h-4 text-purple-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Interface Preview */}
      <div className="container mx-auto px-6 py-24">
        <div className="relative rounded-2xl overflow-hidden group hover-scale">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Interface VC Player" 
            className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 p-12 z-20">
            <h2 className="text-4xl font-bold mb-4 animate-slide-up opacity-0">Interface Moderne</h2>
            <p className="text-gray-300 max-w-xl mb-8 animate-slide-up opacity-0" style={{ animationDelay: '200ms' }}>
              Une interface élégante et intuitive qui redéfinit l'expérience de lecture vidéo sur ordinateur.
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { icon: FastForward, title: 'Contrôles Intuitifs', subtitle: 'Navigation fluide' },
                { icon: Users, title: 'Multi-écrans', subtitle: 'Support multi-moniteurs' },
                { icon: Shield, title: 'Stable & Sécurisé', subtitle: 'Mises à jour régulières' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 animate-slide-up opacity-0 hover-lift" 
                     style={{ animationDelay: `${400 + (index * 200)}ms` }}>
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <item.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-gray-400">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div id="download" className="container mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-12 relative overflow-hidden group hover-scale">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(100,50,255,0.1),transparent_50%)] animate-pulse-ring" />
          <div className="relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 animate-slide-up opacity-0">Téléchargez VC Player</h2>
              <p className="text-xl text-gray-300 mb-8 animate-slide-up opacity-0" style={{ animationDelay: '200ms' }}>
                Disponible gratuitement pour Windows, macOS et Linux. Open source et sans publicité.
              </p>
              <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
                <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 animate-slide-up opacity-0" style={{ animationDelay: '400ms' }}>
                  <AppWindow className="w-5 h-5" />
                  Windows
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 animate-slide-up opacity-0" style={{ animationDelay: '600ms' }}>
                  <Apple className="w-5 h-5" />
                  macOS
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 animate-slide-up opacity-0" style={{ animationDelay: '800ms' }}>
                  {/* <Linux className="w-5 h-5" /> */}
                  Linux
                </button>
              </div>
              <p className="text-gray-400 mt-6 animate-slide-up opacity-0" style={{ animationDelay: '1000ms' }}>
                Version 2.0.1 | Open Source sous licence MIT
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                title: null,
                content: (
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Video className="w-6 h-6 text-purple-500 animate-spin-slow" />
                      <span className="font-medium">VC Player</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Le lecteur vidéo nouvelle génération. Open source et multiplateforme.
                    </p>
                  </div>
                )
              },
              {
                title: "Télécharger",
                links: ["Windows", "macOS", "Linux", "Versions"]
              },
              {
                title: "Communauté",
                links: ["GitHub", "Documentation", "Forum", "Discord"]
              },
              {
                title: "Légal",
                links: ["Licence MIT", "Confidentialité", "Conditions", "Crédits"]
              }
            ].map((section, index) => (
              <div key={index} className="animate-slide-up opacity-0" style={{ animationDelay: `${index * 200}ms` }}>
                {section.title ? (
                  <>
                    <h4 className="font-medium mb-4">{section.title}</h4>
                    <ul className="space-y-2 text-gray-400">
                      {section.links?.map((link, i) => (
                        <li key={i}>
                          <a href="#" className="hover:text-white transition-colors hover-lift">
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  section.content
                )}
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center animate-fade-in opacity-0" style={{ animationDelay: '800ms' }}>
            <div className="text-gray-400">
              2024 VC Player. Open Source sous licence MIT.
            </div>
            <div className="flex gap-4">
              {["GitHub", "Discord", "Twitter"].map((social, index) => (
                <a key={social} 
                   href="#" 
                   className="text-gray-400 hover:text-white transition-colors hover-lift animate-fade-in opacity-0" 
                   style={{ animationDelay: `${1000 + (index * 200)}ms` }}>
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;