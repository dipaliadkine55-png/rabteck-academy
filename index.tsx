/**
 * ============================================================================
 * MONOREPO ARCHITECTURE BLUEPRINT & INDEX ROUTER
 * File: apps/web/src/pages/index.tsx
 * ============================================================================
 *
 * This index file serves as the main entry point and runtime demonstration
 * of the Monorepo Architecture & Accessibility Remediation Baseline.
 *
 * It showcases:
 * 1. Strict package boundaries (@repo/ui, @repo/ui-tokens, @repo/api-client).
 * 2. WCAG 2.1 AA compliant layout structure (SkipNav, Landings, Landmarks).
 * 3. Remediation for audit findings (ISSUE-01 through ISSUE-05).
 */

import React, { useState } from 'react';
import Head from 'next/head';

// Shared Primitive Components from Workspace Package `@repo/ui`
import { 
  AccessibleModal, 
  SkipToContent, 
  SearchForm, 
  FocusRing 
} from '@repo/ui';

// Shared Design Tokens from `@repo/ui-tokens`
import { colors, typography } from '@repo/ui-tokens';

// Simulated API Client boundary from `@repo/api-client`
import { usePublicServicesQuery } from '@repo/api-client';

// ============================================================================
// TYPES & DATA STRUCTURES
// ============================================================================

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Data fetch from workspace backend client
  const { data: services, isLoading, error } = usePublicServicesQuery({ query: searchQuery });

  return (
    <>
      <Head>
        <title>Public Services Portal | Home</title>

        <meta 
          name="description" 
          content="Accessible public services portal built with a React monorepo architecture." 
        />
      </Head>

      {/* 
        REMEDIATION (ISSUE-01): Skip link for keyboard users.
        Bypasses top nav directly to main content landmark.
      */}
      <SkipToContent targetId="main-content" />

      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
        
        {/* ================================================================== */}
        {/* LANDMARK: HEADER & NAVIGATION                                     */}
        {/* ================================================================== */}
        <header role="banner" className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            
            {/* Branding / Logo */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold tracking-tight text-blue-900">
                CityServices
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Official Portal
              </span>
            </div>

            {/* Main Navigation with Visible Focus Rings */}
            <nav role="navigation" aria-label="Main Navigation">
              <ul className="flex items-center gap-6 list-none m-0 p-0">
                <li>
                  <FocusRing>
                    <a 
                      href="#services" 
                      className="text-base font-medium text-gray-700 hover:text-blue-900 focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-2 py-1"
                    >
                      Services
                    </a>
                  </FocusRing>
                </li>
                <li>
                  <FocusRing>
                    <a 
                      href="#news" 
                      className="text-base font-medium text-gray-700 hover:text-blue-900 focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-2 py-1"
                    >
                      News & Updates
                    </a>
                  </FocusRing>
                </li>
                <li>
                  {/* REMEDIATION (ISSUE-05): Trigger for Focus-Trapped Modal */}
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-900 text-white font-medium px-4 py-2 rounded shadow-sm hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    aria-haspopup="dialog"
                  >
                    Report Issue
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* ================================================================== */}
        {/* LANDMARK: MAIN CONTENT AREA                                       */}
        {/* ================================================================== */}
        <main id="main-content" role="main" tabIndex={-1} className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 focus:outline-none">
          
          {/* Hero Section */}
          <section aria-labelledby="hero-heading" className="bg-blue-900 text-white rounded-2xl p-8 mb-12 shadow-lg">
            {/* REMEDIATION (ISSUE-04): Sequential H1 heading */}
            <h1 id="hero-heading" className="text-4xl font-extrabold tracking-tight mb-4">
              Access Municipal Services & Information
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mb-8">
              Find municipal programs, apply for permits, report local issues, and stay updated with official city notices.
            </p>

            {/* REMEDIATION (ISSUE-02): Accessible Search Input with Label & ARIA Binding */}
            <div className="max-w-xl">
              <SearchForm 
                value={searchQuery}
                onChange={setSearchQuery}
                onSubmit={(e) => e.preventDefault()}
                label="Search public services and documents"
                placeholder="e.g., Parking permit, Recycling schedule, Building code..."
              />
            </div>
          </section>

          {/* Service Directory Section */}
          <section id="services" aria-labelledby="services-heading" className="mb-12">
            {/* REMEDIATION (ISSUE-04): Sequential H2 heading directly under H1 */}
            <h2 id="services-heading" className="text-2xl font-bold text-gray-900 mb-6">
              Popular Public Services
            </h2>

            {isLoading && (
              <div role="status" className="p-8 text-center text-gray-600">
                <span className="sr-only">Loading public services directory...</span>
                <p>Loading services...</p>
              </div>
            )}

            {error && (
              <div role="alert" className="p-4 bg-red-50 border-l-4 border-red-600 text-red-900 mb-6">
                <p className="font-semibold">Unable to load services.</p>
                <p className="text-sm">Please refresh the page or try again later.</p>
              </div>
            )}

            {!isLoading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services?.map((service: ServiceCardProps) => (
                  <article 
                    key={service.id} 
                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-semibold text-blue-800 uppercase tracking-wider mb-2 block">
                        {service.category}
                      </span>
                      {/* REMEDIATION (ISSUE-04): H3 heading sequentially nested under H2 */}
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <a 
                      href={`/services/${service.id}`} 
                      className="text-blue-900 font-semibold text-sm inline-flex items-center gap-1 hover:underline focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
                      aria-label={`Apply for ${service.title}`}
                    >
                      Apply online <span aria-hidden="true">&rarr;</span>
                    </a>
                  </article>
                ))}
              </div>
            )}
          </section>
        </main>

        {/* ================================================================== */}
        {/* LANDMARK: FOOTER                                                  */}
        {/* ================================================================== */}
        <footer role="contentinfo" className="bg-gray-900 text-gray-300 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Municipal Government Portal. All rights reserved.
            </p>
            <ul className="flex gap-6 text-sm list-none p-0 m-0">
              <li>
                <a href="/accessibility" className="hover:underline focus-visible:ring-2 focus-visible:ring-white rounded">
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline focus-visible:ring-2 focus-visible:ring-white rounded">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </footer>

        {/* ================================================================== */}
        {/* REMEDIATION (ISSUE-03 & ISSUE-05): FOCUS-TRAPPED MODAL DIALOG     */}
        {/* ================================================================== */}
        <AccessibleModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          title="Report an Accessibility or Portal Issue"
          description="Use this form to notify municipal staff of broken links, keyboard traps, or missing labels."
        >
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              setIsModalOpen(false);
            }} 
            className="space-y-4"
          >
            <div>
              <label htmlFor="issue-description" className="block text-sm font-medium text-gray-700 mb-1">
                Issue Description <span className="text-red-600" aria-hidden="true">*</span>
              </label>
              <textarea
                id="issue-description"
                required
                rows={3}
                aria-required="true"
                className="w-full rounded-md border border-gray-300 p-2 text-sm focus-visible:ring-2 focus-visible:ring-blue-600"
                placeholder="Describe the problem, location URL, and assistive technology used..."
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-900 text-white rounded-md text-sm font-medium hover:bg-blue-800 focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Submit Report
              </button>
            </div>
          </form>
        </AccessibleModal>

      </div>
    </>
  );
}