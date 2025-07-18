
import React, { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PerformanceMonitor from "./components/PerformanceMonitor";
import ScrollToTopButton from "./components/ScrollToTopButton";
import PageTransition from "./components/PageTransition";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Team = lazy(() => import("./pages/Team"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Insights = lazy(() => import("./pages/Insights"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load dashboard pages
const NovaShieldDashboard = lazy(() => import("./pages/dashboards/NovaShieldDashboard"));
const NovaPulseDashboard = lazy(() => import("./pages/dashboards/NovaPulseDashboard"));
const NovaSphereDashboard = lazy(() => import("./pages/dashboards/NovaSphereDashboard"));
const NovaVaultDashboard = lazy(() => import("./pages/dashboards/NovaVaultDashboard"));
const NovaVisionDashboard = lazy(() => import("./pages/dashboards/NovaVisionDashboard"));
const NovaMindDashboard = lazy(() => import("./pages/dashboards/NovaMindDashboard"));
const NovaBoostDashboard = lazy(() => import("./pages/dashboards/NovaBoostDashboard"));
const NovaGlobalDashboard = lazy(() => import("./pages/dashboards/NovaGlobalDashboard"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// Optimized query client with performance settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (garbage collection time)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = React.memo(() => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PerformanceMonitor />
      <BrowserRouter>
        <PageTransition />
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/team" element={<Team />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Dashboard Routes */}
            <Route path="/dashboard/novashield" element={<NovaShieldDashboard />} />
            <Route path="/dashboard/novapulse" element={<NovaPulseDashboard />} />
            <Route path="/dashboard/novasphere" element={<NovaSphereDashboard />} />
            <Route path="/dashboard/novavault" element={<NovaVaultDashboard />} />
            <Route path="/dashboard/novavision" element={<NovaVisionDashboard />} />
            <Route path="/dashboard/novamind" element={<NovaMindDashboard />} />
            <Route path="/dashboard/novaboost" element={<NovaBoostDashboard />} />
            <Route path="/dashboard/novaglobal" element={<NovaGlobalDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ScrollToTopButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
));

App.displayName = 'App';

export default App;
