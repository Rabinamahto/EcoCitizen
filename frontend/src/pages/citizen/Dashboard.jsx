import React, { useState } from 'react';

// ============================================================================
// SVG ICON COMPONENTS (Self-contained, Lucide-style for reliability)
// ============================================================================

const EcoLogoIcon = ({ className = "w-7 h-7" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#10B981" fillOpacity="0.15" />
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 21.95 17.52 21.95 12" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 6V12L16 14" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 11C7 8.24 9.24 6 12 6C14.76 6 17 8.24 17 11C17 14.5 12 18 12 18C12 18 7 14.5 7 11Z" fill="#10B981" />
  </svg>
);

const BellIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const UserIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const PlusCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);

const CheckCircleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ClockIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const AlertTriangleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const MapPinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SearchIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const EyeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const XIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const UploadCloudIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M12 12v9" />
    <path d="m16 16-4-4-4 4" />
  </svg>
);

const MapIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1="9" y1="3" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="21" />
  </svg>
);

const FileTextIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const ShieldCheckIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const AwardIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const LogOutIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

// ============================================================================
// REALISTIC SAMPLE COMPLAINT DATA
// ============================================================================

const INITIAL_COMPLAINTS = [
  {
    id: "ECO-2026-8941",
    category: "Garbage Dump",
    title: "Uncollected Garbage Near Community Park",
    location: "Ward 12, Kothrud, Pune",
    landmark: "Behind Cummins College Gate 2",
    date: "12 Mar 2026",
    status: "In Progress",
    assignedOfficer: "Ramesh Shinde (Sanitation Dept)",
    description: "Plastic waste and wet garbage piling up for the last 3 days. Foul odor spreading to residential area.",
    priority: "High",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ECO-2026-8820",
    category: "Water Leakage",
    title: "Clean Drinking Water Pipe Bursting on Main Road",
    location: "Ward 12, Anand Nagar, Pune",
    landmark: "Near Axis Bank ATM, Ideal Colony",
    date: "10 Mar 2026",
    status: "Resolved",
    assignedOfficer: "Prakash Deshmukh (Water Works)",
    description: "Pipeline ruptured during road repair. Clean water leaking constantly for over 6 hours.",
    priority: "Urgent",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ECO-2026-8715",
    category: "Streetlight Outage",
    title: "Dark Streetlights in Lane 4",
    location: "Ward 12, Paud Road, Pune",
    landmark: "Opposite Sahyadri Hospital",
    date: "08 Mar 2026",
    status: "Pending",
    assignedOfficer: "Unassigned",
    description: "4 streetlights out of order, causing safety issues for night pedestrians and commuters.",
    priority: "Medium",
    image: null
  },
  {
    id: "ECO-2026-8592",
    category: "Air & Smoke Hazard",
    title: "Illegal Burning of Plastic & Dry Leaves",
    location: "Ward 12, Karve Nagar, Pune",
    landmark: "Open ground near Riverside Road",
    date: "04 Mar 2026",
    status: "Resolved",
    assignedOfficer: "Sunita Patil (Environmental Cell)",
    description: "Local vendors burning plastic bags and dry biomass in open ground during evening.",
    priority: "High",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ECO-2026-8410",
    category: "Dangerous Potholes",
    title: "Deep Pothole Causing Traffic Congestion",
    location: "Ward 12, Chandani Chowk Flyover, Pune",
    landmark: "NXT Service Lane Entry",
    date: "01 Mar 2026",
    status: "In Progress",
    assignedOfficer: "Vijay Joshi (Roads Maintenance)",
    description: "Large 2-foot wide pothole causing two-wheelers to slip, especially after sudden rain.",
    priority: "High",
    image: null
  }
];

// ============================================================================
// MAIN CITIZEN DASHBOARD COMPONENT
// ============================================================================

export default function Dashboard() {
  const [complaints, setComplaints] = useState(INITIAL_COMPLAINTS);
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals & Popups State
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Form State for Report Issue Modal
  const [formData, setFormData] = useState({
    category: 'Garbage Dump',
    title: '',
    location: 'Ward 12, Kothrud, Pune',
    landmark: '',
    description: '',
    priority: 'Medium'
  });

  // Computed summary metrics
  const totalComplaints = complaints.length;
  const pendingCount = complaints.filter(c => c.status === 'Pending').length;
  const inProgressCount = complaints.filter(c => c.status === 'In Progress').length;
  const resolvedCount = complaints.filter(c => c.status === 'Resolved').length;

  // Filtered complaints list
  const filteredComplaints = complaints.filter(item => {
    const matchesTab = activeTab === 'All' || item.status === activeTab;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Show toast notification
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  // Form input handler
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Submit new complaint
  const handleReportSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      alert("Please fill in the title and description.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newComplaint = {
        id: `ECO-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        category: formData.category,
        title: formData.title,
        location: formData.location,
        landmark: formData.landmark || "Near Ward Area",
        date: "Just now",
        status: "Pending",
        assignedOfficer: "Assigned via Automated Ward Routing",
        description: formData.description,
        priority: formData.priority,
        image: null
      };

      setComplaints([newComplaint, ...complaints]);
      setIsSubmitting(false);
      setIsReportModalOpen(false);
      
      // Reset Form
      setFormData({
        category: 'Garbage Dump',
        title: '',
        location: 'Ward 12, Kothrud, Pune',
        landmark: '',
        description: '',
        priority: 'Medium'
      });

      triggerToast("Your complaint has been submitted successfully! Ref ID generated.");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      
      {/* ==================================================================== */}
      {/* 1. HEADER / NAVBAR                                                   */}
      {/* ==================================================================== */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-center">
              <EcoLogoIcon className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <span className="font-black text-xl text-slate-900 tracking-tight flex items-center">
                Eco<span className="text-emerald-600">Citizen</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 hidden sm:inline-block ml-2">
                Civic Governance
              </span>
            </div>
          </div>

          {/* Right Header Navigation & Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Quick Report CTA in Header */}
            <button
              onClick={() => setIsReportModalOpen(true)}
              className="hidden sm:inline-flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm px-3.5 py-2 rounded-xl transition-all shadow-sm shadow-emerald-600/20 active:scale-95"
            >
              <PlusCircleIcon className="w-4 h-4" />
              <span>Report Issue</span>
            </button>

            {/* Notifications Dropdown Container */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileMenu(false);
                }}
                className="relative p-2 text-slate-600 hover:text-emerald-600 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none"
                aria-label="Notifications"
              >
                <BellIcon className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-white"></span>
              </button>

              {/* Notifications Popup */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 z-50 text-xs">
                  <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">Notifications</span>
                    <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">2 New</span>
                  </div>
                  <div className="divide-y divide-slate-50 max-h-64 overflow-y-auto">
                    <div className="p-3.5 hover:bg-slate-50 transition-colors cursor-pointer">
                      <p className="font-semibold text-slate-800 mb-0.5">Complaint ECO-2026-8941 Updated</p>
                      <p className="text-slate-500 text-[11px]">Sanitation Officer assigned to your locality.</p>
                      <span className="text-[10px] text-emerald-600 font-medium mt-1 inline-block">10 mins ago</span>
                    </div>
                    <div className="p-3.5 hover:bg-slate-50 transition-colors cursor-pointer">
                      <p className="font-semibold text-slate-800 mb-0.5">Issue Resolved ECO-2026-8820</p>
                      <p className="text-slate-500 text-[11px]">Water leakage at Anand Nagar fixed completely.</p>
                      <span className="text-[10px] text-slate-400 font-medium mt-1 inline-block">2 hours ago</span>
                    </div>
                  </div>
                  <div className="px-4 pt-2 border-t border-slate-100 text-center">
                    <button className="text-emerald-600 font-semibold text-[11px] hover:underline">Mark all as read</button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Menu Dropdown Container */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center space-x-2 p-1.5 rounded-xl hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all focus:outline-none"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  AS
                </div>
                <div className="hidden md:block text-left">
                  <div className="text-xs font-bold text-slate-800 leading-none">Aniket Sharma</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 font-medium">Ward 12 • Citizen</div>
                </div>
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 text-xs">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="font-bold text-slate-900 text-sm">Aniket Sharma</p>
                    <p className="text-slate-500 text-[11px] truncate">aniket.s@ecocitizen.in</p>
                    <div className="mt-1.5 inline-flex items-center space-x-1 text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-semibold border border-emerald-200">
                      <ShieldCheckIcon className="w-3 h-3 text-emerald-600" />
                      <span>Verified Resident</span>
                    </div>
                  </div>
                  <div className="py-1">
                    <button className="w-full text-left px-4 py-2 hover:bg-slate-50 font-medium text-slate-700 flex items-center space-x-2">
                      <UserIcon className="w-4 h-4 text-slate-400" />
                      <span>My Citizen Profile</span>
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-slate-50 font-medium text-slate-700 flex items-center space-x-2">
                      <AwardIcon className="w-4 h-4 text-slate-400" />
                      <span>EcoPoints & Rewards</span>
                    </button>
                  </div>
                  <div className="border-t border-slate-100 pt-1">
                    <button className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 font-semibold flex items-center space-x-2">
                      <LogOutIcon className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* Toast Alert Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-3 border border-slate-700 animate-bounce">
          <CheckCircleIcon className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Main Page Body Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        
        {/* ==================================================================== */}
        {/* 2. WELCOME SECTION                                                   */}
        {/* ==================================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-700 to-teal-900 rounded-3xl text-white p-6 sm:p-8 shadow-xl shadow-emerald-900/15">
          {/* Subtle Background Eco Leaf Graphics */}
          <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
            <EcoLogoIcon className="w-80 h-80 text-white" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-emerald-600/50 backdrop-blur-sm border border-emerald-400/30 text-emerald-100 text-xs px-3 py-1 rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Kothrud Ward No. 12 Dashboard</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white mb-2">
              Welcome to <span className="text-emerald-300">EcoCitizen</span>
            </h1>
            <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed mb-6">
              Spot garbage dumps, leaking water pipelines, broken streetlights, or pothole hazards in your neighborhood? Report issues instantly to your municipal officers and track resolution in real-time.
            </p>

            {/* Quick Action CTA Button */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsReportModalOpen(true)}
                className="bg-white hover:bg-emerald-50 text-emerald-900 font-extrabold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-lg shadow-black/10 transition-all flex items-center space-x-2 active:scale-95 cursor-pointer"
              >
                <PlusCircleIcon className="w-5 h-5 text-emerald-600" />
                <span>Report an Environmental Problem</span>
              </button>
              
              <button 
                onClick={() => {
                  const element = document.getElementById('recent-complaints-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-emerald-800/60 hover:bg-emerald-800 border border-emerald-500/40 text-white font-semibold text-xs sm:text-sm px-4 py-3 rounded-2xl transition-all flex items-center space-x-2"
              >
                <FileTextIcon className="w-4 h-4 text-emerald-300" />
                <span>View My Complaints</span>
              </button>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* 3. SUMMARY STATS CARDS                                              */}
        {/* ==================================================================== */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          
          {/* Card 1: Total */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Total Reported</span>
              <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                <FileTextIcon className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">{totalComplaints}</div>
            <p className="text-[11px] text-slate-500 mt-1">Submitted from your ward</p>
          </div>

          {/* Card 2: Pending */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Pending</span>
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <ClockIcon className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-600">{pendingCount}</div>
            <p className="text-[11px] text-slate-500 mt-1">Awaiting officer review</p>
          </div>

          {/* Card 3: In Progress */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">In Progress</span>
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <AlertTriangleIcon className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-blue-600">{inProgressCount}</div>
            <p className="text-[11px] text-slate-500 mt-1">Field worker assigned</p>
          </div>

          {/* Card 4: Resolved */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Resolved</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircleIcon className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">{resolvedCount}</div>
            <p className="text-[11px] text-slate-500 mt-1">Issues fixed & verified</p>
          </div>

        </section>

        {/* ==================================================================== */}
        {/* 4. QUICK ACTIONS GRID                                                */}
        {/* ==================================================================== */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-1">Quick Citizen Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            
            {/* Quick Action 1 */}
            <button
              onClick={() => setIsReportModalOpen(true)}
              className="group p-4 bg-white border border-slate-200/80 hover:border-emerald-500/50 rounded-2xl shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex items-center justify-center mb-3">
                <PlusCircleIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">Report Problem</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Log new issue in 1 min</p>
              </div>
            </button>

            {/* Quick Action 2 */}
            <button
              onClick={() => {
                setActiveTab('All');
                const element = document.getElementById('recent-complaints-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group p-4 bg-white border border-slate-200/80 hover:border-emerald-500/50 rounded-2xl shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors flex items-center justify-center mb-3">
                <FileTextIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-teal-700 transition-colors">My Complaints</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Check status updates</p>
              </div>
            </button>

            {/* Quick Action 3 */}
            <button
              onClick={() => {
                const searchInput = document.getElementById('complaint-search-input');
                if (searchInput) searchInput.focus();
              }}
              className="group p-4 bg-white border border-slate-200/80 hover:border-emerald-500/50 rounded-2xl shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors flex items-center justify-center mb-3">
                <SearchIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-indigo-700 transition-colors">Track Complaint</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">Search by Complaint ID</p>
              </div>
            </button>

            {/* Quick Action 4 */}
            <button
              onClick={() => triggerToast("Opening Ward 12 Civic Map View (Demo feature)...")}
              className="group p-4 bg-white border border-slate-200/80 hover:border-emerald-500/50 rounded-2xl shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors flex items-center justify-center mb-3">
                <MapIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-sky-700 transition-colors">Explore Map</h3>
                <p className="text-[11px] text-slate-500 mt-0.5">View local Ward hotspots</p>
              </div>
            </button>

          </div>
        </section>

        {/* ==================================================================== */}
        {/* 5. RECENT COMPLAINTS SECTION                                         */}
        {/* ==================================================================== */}
        <section id="recent-complaints-section" className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden">
          
          {/* Header & Filter Controls Bar */}
          <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">Recent Complaints</h2>
              <p className="text-xs text-slate-500 mt-0.5">Track your logged civic and environmental issues</p>
            </div>

            {/* Search and Tabs Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              
              {/* Search Bar */}
              <div className="relative min-w-[200px]">
                <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="complaint-search-input"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search ID, category..."
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')} 
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <XIcon className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Status Filter Tabs */}
              <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-semibold overflow-x-auto">
                {['All', 'Pending', 'In Progress', 'Resolved'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                      activeTab === tab
                        ? 'bg-white text-slate-900 shadow-sm font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Complaints Data Display Table / Cards */}
          {filteredComplaints.length === 0 ? (
            /* Empty State */
            <div className="p-12 text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400 mb-3">
                <SearchIcon className="w-6 h-6" />
              </div>
              <p className="font-bold text-slate-800 text-sm">No complaints found</p>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                No matching records for "{searchTerm}" in tab "{activeTab}". Try resetting filters or search criteria.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setActiveTab('All'); }}
                className="mt-4 text-xs font-bold text-emerald-600 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              {/* Desktop View Table (Hidden on small mobile screens) */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      <th className="py-3.5 px-6">Complaint ID</th>
                      <th className="py-3.5 px-6">Category & Title</th>
                      <th className="py-3.5 px-6">Location</th>
                      <th className="py-3.5 px-6">Date</th>
                      <th className="py-3.5 px-6">Status</th>
                      <th className="py-3.5 px-6 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {filteredComplaints.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/80 transition-colors group">
                        
                        {/* ID Column */}
                        <td className="py-4 px-6 font-mono font-bold text-emerald-700">
                          {item.id}
                        </td>

                        {/* Title & Category Column */}
                        <td className="py-4 px-6">
                          <div className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5 flex items-center space-x-2">
                            <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                              {item.category}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className={`font-semibold ${item.priority === 'Urgent' ? 'text-red-600' : item.priority === 'High' ? 'text-amber-600' : 'text-slate-500'}`}>
                              Priority: {item.priority}
                            </span>
                          </div>
                        </td>

                        {/* Location Column */}
                        <td className="py-4 px-6 text-slate-600">
                          <div className="flex items-start space-x-1">
                            <MapPinIcon className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item.location}</span>
                          </div>
                        </td>

                        {/* Date Column */}
                        <td className="py-4 px-6 text-slate-500 whitespace-nowrap">
                          {item.date}
                        </td>

                        {/* Status Pill Badge */}
                        <td className="py-4 px-6">
                          {item.status === 'Resolved' && (
                            <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                              <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Resolved</span>
                            </span>
                          )}
                          {item.status === 'In Progress' && (
                            <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800">
                              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                              <span>In Progress</span>
                            </span>
                          )}
                          {item.status === 'Pending' && (
                            <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800">
                              <ClockIcon className="w-3.5 h-3.5 text-amber-600" />
                              <span>Pending</span>
                            </span>
                          )}
                        </td>

                        {/* Details Action Button */}
                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={() => setSelectedComplaint(item)}
                            className="inline-flex items-center space-x-1 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 font-bold text-[11px] px-3 py-1.5 rounded-lg transition-all"
                          >
                            <EyeIcon className="w-3.5 h-3.5" />
                            <span>View Details</span>
                          </button>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card List View (Visible on small screens) */}
              <div className="block md:hidden divide-y divide-slate-100">
                {filteredComplaints.map((item) => (
                  <div key={item.id} className="p-4 hover:bg-slate-50 transition-colors space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-emerald-700 text-xs">{item.id}</span>
                      
                      {/* Mobile Status Badge */}
                      {item.status === 'Resolved' && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          Resolved
                        </span>
                      )}
                      {item.status === 'In Progress' && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">
                          In Progress
                        </span>
                      )}
                      {item.status === 'Pending' && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                          Pending
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                      <p className="text-xs text-slate-500 mt-1 flex items-center space-x-1">
                        <MapPinIcon className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-1 text-xs">
                      <span className="text-slate-400 text-[11px]">{item.date}</span>
                      <button
                        onClick={() => setSelectedComplaint(item)}
                        className="text-emerald-600 font-bold hover:underline flex items-center space-x-1"
                      >
                        <span>View Details</span>
                        <EyeIcon className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

        </section>

      </main>

      {/* ==================================================================== */}
      {/* 6. MODAL: REPORT A PROBLEM FORM                                      */}
      {/* ==================================================================== */}
      {isReportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 my-8 relative animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setIsReportModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </button>

            {/* Modal Title Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <PlusCircleIcon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">Report an Issue</h2>
                <p className="text-xs text-slate-500">Your report will be assigned to Ward 12 officers</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleReportSubmit} className="space-y-4">
              
              {/* Category Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleFormChange}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
                >
                  <option value="Garbage Dump">Garbage Dump / Solid Waste</option>
                  <option value="Water Leakage">Water Leakage / Pipe Burst</option>
                  <option value="Streetlight Outage">Streetlight Fault / Dark Lane</option>
                  <option value="Dangerous Potholes">Dangerous Pothole / Road Damage</option>
                  <option value="Air & Smoke Hazard">Illegal Plastic / Trash Burning</option>
                  <option value="Tree Hazard">Fallen / Dangerous Tree Branches</option>
                </select>
              </div>

              {/* Issue Title */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Issue Title / Subject *
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleFormChange}
                  placeholder="e.g. Uncollected Garbage overflowing near park"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>

              {/* Location & Landmark */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Ward / Locality
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleFormChange}
                    className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-600 font-medium"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Landmark / Street
                  </label>
                  <input
                    type="text"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleFormChange}
                    placeholder="e.g. Near Gate 2, Paud Road"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
              </div>

              {/* Priority Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Severity / Priority
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Medium', 'High', 'Urgent'].map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setFormData(prev => ({ ...prev, priority: p }))}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                        formData.priority === p
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Detailed Description */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Detailed Description *
                </label>
                <textarea
                  name="description"
                  rows={3}
                  required
                  value={formData.description}
                  onChange={handleFormChange}
                  placeholder="Provide details about the issue location, severity, duration..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                ></textarea>
              </div>

              {/* Photo Upload Mockup Box */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Upload Photo Evidence (Optional)
                </label>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer">
                  <UploadCloudIcon className="w-8 h-8 text-emerald-600 mx-auto mb-1.5" />
                  <p className="text-xs font-semibold text-slate-700">Click or drag photo to attach</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">JPG, PNG up to 5MB (GEO-tagged auto supported)</p>
                </div>
              </div>

              {/* Form Action Buttons */}
              <div className="pt-3 flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => setIsReportModalOpen(false)}
                  className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center space-x-2 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit Complaint</span>
                  )}
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 7. MODAL: VIEW COMPLAINT DETAILS                                     */}
      {/* ==================================================================== */}
      {selectedComplaint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 my-8 relative animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedComplaint(null)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </button>

            {/* Header ID & Status */}
            <div className="flex items-center space-x-2 mb-3">
              <span className="font-mono font-bold text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                {selectedComplaint.id}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-semibold text-slate-500">{selectedComplaint.category}</span>
            </div>

            <h2 className="text-lg font-black text-slate-900 mb-2">{selectedComplaint.title}</h2>
            
            <p className="text-xs text-slate-600 leading-relaxed mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
              "{selectedComplaint.description}"
            </p>

            {/* Photo Preview if available */}
            {selectedComplaint.image && (
              <div className="mb-4 rounded-xl overflow-hidden border border-slate-200 max-h-48">
                <img 
                  src={selectedComplaint.image} 
                  alt="Complaint Evidence" 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}

            {/* Key Information Cards */}
            <div className="space-y-2 mb-6 text-xs">
              <div className="flex items-start space-x-2 text-slate-600">
                <MapPinIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800">Location:</span> {selectedComplaint.location}
                  {selectedComplaint.landmark && <span className="block text-[11px] text-slate-400">Landmark: {selectedComplaint.landmark}</span>}
                </div>
              </div>

              <div className="flex items-center space-x-2 text-slate-600">
                <UserIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="font-bold text-slate-800">Assigned Officer:</span> {selectedComplaint.assignedOfficer}
                </div>
              </div>

              <div className="flex items-center space-x-2 text-slate-600">
                <ClockIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="font-bold text-slate-800">Logged Date:</span> {selectedComplaint.date}
                </div>
              </div>
            </div>

            {/* Resolution Progress Timeline Mockup */}
            <div className="border-t border-slate-100 pt-4 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Live Status Progression</h4>
              <div className="space-y-3 pl-2 border-l-2 border-emerald-500">
                <div className="relative pl-4">
                  <div className="absolute -left-[13px] top-0 w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-white"></div>
                  <p className="text-xs font-bold text-slate-900">Submitted & Verified</p>
                  <p className="text-[10px] text-slate-400">Complaint registered via EcoCitizen portal</p>
                </div>
                <div className="relative pl-4">
                  <div className={`absolute -left-[13px] top-0 w-3 h-3 rounded-full ${selectedComplaint.status !== 'Pending' ? 'bg-emerald-600' : 'bg-slate-300'} ring-4 ring-white`}></div>
                  <p className="text-xs font-bold text-slate-900">Officer Dispatched</p>
                  <p className="text-[10px] text-slate-400">Assigned to Ward Sanitation Supervisor</p>
                </div>
                <div className="relative pl-4">
                  <div className={`absolute -left-[13px] top-0 w-3 h-3 rounded-full ${selectedComplaint.status === 'Resolved' ? 'bg-emerald-600' : 'bg-slate-300'} ring-4 ring-white`}></div>
                  <p className="text-xs font-bold text-slate-900">Issue Resolved</p>
                  <p className="text-[10px] text-slate-400">Site cleaned and verified with photo proof</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedComplaint(null)}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-all"
            >
              Close Details
            </button>

          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 8. FOOTER                                                            */}
      {/* ==================================================================== */}
      <footer className="mt-auto bg-white border-t border-slate-200/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <EcoLogoIcon className="w-4 h-4 text-emerald-600" />
            <span className="font-bold text-slate-700">EcoCitizen Governance Portal</span>
          </div>
          <p>© 2026 Code4Nature Challenge. Ward 12 Civic Management Platform.</p>
        </div>
      </footer>

    </div>
  );
}
