import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy - Convertio | Secure File Conversion with Complete Privacy Protection",
    description: "Read Convertio's comprehensive privacy policy. Learn how our WebAssembly-powered converter ensures your files never leave your device, providing enterprise-level privacy protection for all file conversions.",
    keywords: "convertio privacy policy, file conversion privacy, secure file converter, privacy protection, data security, local file processing, webassembly security, gdpr compliance, file converter privacy",
    openGraph: {
        title: "Convertio Privacy Policy - Secure File Conversion",
        description: "Learn about Convertio's privacy-first approach to file conversion with local processing and zero data collection.",
        type: "website",
        url: "https://convertio.co/privacy-policy"
    }
};

export default function PrivacyPolicy() {
    return (
        <div className="space-y-12 text-md md:text-lg text-muted-foreground pb-4 md:pb-8">
            <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-semibold text-foreground text-center">
                    Convertio Privacy Policy
                </h1>
                <p className="text-center text-sm">
                    <strong>Effective Date:</strong> July 1, 2025 | <strong>Last Updated:</strong> July 1, 2025
                </p>
            </div>

            <div className="space-y-8">
                <section>
                    <p className="text-lg leading-relaxed">
                        At Convertio, privacy protection is not just a policy—it's the foundation of our entire 
                        technical architecture. We've revolutionized online file conversion by implementing a 
                        privacy-by-design approach that ensures your files, documents, images, videos, and audio 
                        recordings never leave your device during the conversion process. This Privacy Policy 
                        outlines our comprehensive commitment to protecting your personal information and digital assets.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        1. Privacy-First Technology Architecture
                    </h2>
                    <p>
                        Convertio utilizes cutting-edge WebAssembly technology to process all file conversions 
                        locally within your web browser. This revolutionary approach means that when you convert 
                        MP4 videos to AVI format, transform FLAC audio files to MP3, optimize PNG images to JPG, 
                        or convert PDF documents to DOCX format, all processing happens entirely on your device 
                        without any file uploads to external servers.
                    </p>
                    <p>
                        This local processing model provides several critical privacy advantages: your confidential 
                        business documents remain on your device throughout the conversion process, personal photos 
                        and videos are never transmitted across the internet, sensitive audio recordings stay 
                        completely private, and no third parties can access your files during conversion operations.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        2. Information We Do NOT Collect
                    </h2>
                    <p>
                        Unlike traditional file conversion services that require file uploads to remote servers, 
                        Convertio's privacy-first architecture means we do NOT collect, store, or have access to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Your uploaded files in any format (videos, audio, images, documents)</li>
                        <li>File contents, metadata, or embedded information</li>
                        <li>Converted output files or conversion parameters</li>
                        <li>Personal documents, business files, or confidential materials</li>
                        <li>File names, folder structures, or organizational information</li>
                        <li>Conversion history or usage patterns related to specific files</li>
                        <li>Login credentials, account information, or personal identifiers</li>
                        <li>Payment information (since our service is completely free)</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        3. Limited Anonymous Analytics Data
                    </h2>
                    <p>
                        To continuously improve Convertio's user experience and technical performance, we collect 
                        minimal, anonymized analytics data through Google Analytics. This information is completely 
                        separated from your file conversion activities and includes only:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>General website usage patterns and page visit statistics</li>
                        <li>Browser type and version for compatibility optimization</li>
                        <li>Device type (desktop, mobile, tablet) for responsive design improvements</li>
                        <li>Geographic region (country/state level) for localization purposes</li>
                        <li>Referral sources to understand how users discover Convertio</li>
                        <li>Performance metrics to optimize loading speeds and functionality</li>
                    </ul>
                    <p>
                        This analytics data is completely anonymous, cannot be linked to individual users or 
                        specific file conversion activities, and is used solely for platform improvement purposes.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        4. How File Conversion Works Privately
                    </h2>
                    <p>
                        Understanding Convertio's privacy-protected conversion process helps illustrate our 
                        commitment to data security:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li>
                            <strong>File Selection:</strong> You select files from your device using standard 
                            browser file selection dialogs
                        </li>
                        <li>
                            <strong>Local Loading:</strong> Files are loaded into your browser's memory without 
                            being transmitted anywhere
                        </li>
                        <li>
                            <strong>WebAssembly Processing:</strong> Our conversion engine processes files entirely 
                            within your browser using compiled WebAssembly modules
                        </li>
                        <li>
                            <strong>Local Conversion:</strong> Format transformation occurs on your device using 
                            advanced compression and encoding algorithms
                        </li>
                        <li>
                            <strong>Direct Download:</strong> Converted files are immediately available for download 
                            directly from your browser
                        </li>
                        <li>
                            <strong>Automatic Cleanup:</strong> All temporary files and conversion data are 
                            automatically cleared from browser memory
                        </li>
                    </ol>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        5. Advanced Security Measures
                    </h2>
                    <p>
                        Convertio implements multiple layers of security protection to ensure your privacy and 
                        data integrity:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                            <strong>HTTPS Encryption:</strong> All website communications are protected with 
                            industry-standard SSL/TLS encryption
                        </li>
                        <li>
                            <strong>Content Security Policy:</strong> Strict CSP headers prevent unauthorized 
                            script execution and data exfiltration
                        </li>
                        <li>
                            <strong>Memory Isolation:</strong> WebAssembly processing occurs in isolated memory 
                            spaces preventing data leakage
                        </li>
                        <li>
                            <strong>No Server Storage:</strong> Our servers never receive, store, or process 
                            your actual files
                        </li>
                        <li>
                            <strong>Automatic Memory Clearing:</strong> Browser memory is automatically cleared 
                            after each conversion session
                        </li>
                        <li>
                            <strong>Regular Security Audits:</strong> Ongoing security assessments ensure 
                            platform integrity and vulnerability management
                        </li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        6. Cookie Usage and Management
                    </h2>
                    <p>
                        Convertio uses minimal, privacy-focused cookies to enhance your user experience:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                            <strong>Essential Cookies:</strong> Required for basic website functionality, 
                            security features, and user interface preferences
                        </li>
                        <li>
                            <strong>Analytics Cookies:</strong> Anonymous Google Analytics cookies for 
                            usage statistics and performance optimization
                        </li>
                        <li>
                            <strong>Preference Cookies:</strong> Settings like dark/light mode themes and 
                            language preferences
                        </li>
                    </ul>
                    <p>
                        You can control cookie preferences through your browser settings. Disabling analytics 
                        cookies will not affect file conversion functionality, though it may limit our ability 
                        to improve the platform based on usage patterns.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        7. GDPR and International Compliance
                    </h2>
                    <p>
                        Convertio's privacy-by-design architecture inherently complies with international 
                        data protection regulations including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                            <strong>GDPR (General Data Protection Regulation):</strong> European Union data 
                            protection compliance through minimal data collection and local processing
                        </li>
                        <li>
                            <strong>CCPA (California Consumer Privacy Act):</strong> California privacy law 
                            compliance with transparent data practices
                        </li>
                        <li>
                            <strong>PIPEDA (Personal Information Protection):</strong> Canadian privacy 
                            legislation compliance through privacy-first design
                        </li>
                        <li>
                            <strong>LGPD (Lei Geral de Proteção de Dados):</strong> Brazilian data protection 
                            law compliance with minimal data processing
                        </li>
                    </ul>
                    <p>
                        Since your files never leave your device during conversion, traditional data protection 
                        concerns about international data transfers, server security, and third-party access 
                        are eliminated entirely.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        8. Third-Party Services and Integrations
                    </h2>
                    <p>
                        Convertio integrates with minimal third-party services to provide essential functionality:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                            <strong>Google Analytics:</strong> Anonymous usage statistics and performance 
                            monitoring with IP anonymization enabled
                        </li>
                        <li>
                            <strong>Google Fonts:</strong> Typography resources loaded with privacy-optimized 
                            settings and minimal data collection
                        </li>
                        <li>
                            <strong>Content Delivery Networks:</strong> Performance optimization for faster 
                            loading speeds without data collection
                        </li>
                    </ul>
                    <p>
                        These integrations are carefully selected and configured to minimize data collection 
                        while providing essential functionality for platform operation and user experience optimization.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        9. Your Privacy Rights and Controls
                    </h2>
                    <p>
                        As a Convertio user, you maintain complete control over your privacy and data:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                            <strong>File Ownership:</strong> You retain complete ownership and control of all 
                            files processed through Convertio
                        </li>
                        <li>
                            <strong>Data Portability:</strong> Converted files remain on your device and can 
                            be moved, shared, or stored according to your preferences
                        </li>
                        <li>
                            <strong>Deletion Rights:</strong> Since files never leave your device, you control 
                            all deletion and retention decisions
                        </li>
                        <li>
                            <strong>Analytics Opt-out:</strong> You can disable analytics tracking through 
                            browser settings or analytics opt-out tools
                        </li>
                        <li>
                            <strong>Cookie Management:</strong> Full control over cookie preferences and 
                            tracking prevention through browser settings
                        </li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        10. Data Retention and Automatic Cleanup
                    </h2>
                    <p>
                        Convertio's architecture ensures automatic data cleanup and minimal retention:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                            <strong>Zero Server Retention:</strong> No files or conversion data are retained 
                            on our servers since processing occurs locally
                        </li>
                        <li>
                            <strong>Automatic Memory Clearing:</strong> Browser memory is automatically cleared 
                            after each conversion session
                        </li>
                        <li>
                            <strong>Temporary File Cleanup:</strong> Any temporary files created during 
                            conversion are immediately deleted
                        </li>
                        <li>
                            <strong>Analytics Data Retention:</strong> Anonymous analytics data is retained 
                            according to Google Analytics standard policies (26 months maximum)
                        </li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        11. Security Incident Response
                    </h2>
                    <p>
                        While Convertio's local processing model significantly reduces security risks, we 
                        maintain comprehensive incident response procedures:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                            <strong>Proactive Monitoring:</strong> Continuous monitoring of platform security 
                            and performance metrics
                        </li>
                        <li>
                            <strong>Rapid Response:</strong> Immediate response protocols for any potential 
                            security concerns or vulnerabilities
                        </li>
                        <li>
                            <strong>Transparent Communication:</strong> Clear communication with users regarding 
                            any security incidents or platform changes
                        </li>
                        <li>
                            <strong>Regular Updates:</strong> Frequent security updates and patches to maintain 
                            platform integrity
                        </li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        12. Children's Privacy Protection
                    </h2>
                    <p>
                        Convertio is designed to be safe for users of all ages, with special consideration 
                        for children's privacy:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                            <strong>COPPA Compliance:</strong> Full compliance with Children's Online Privacy 
                            Protection Act requirements
                        </li>
                        <li>
                            <strong>No Personal Information:</strong> No collection of personal information 
                            from users of any age
                        </li>
                        <li>
                            <strong>Safe Processing:</strong> Local file processing ensures children's 
                            school projects and personal files remain private
                        </li>
                        <li>
                            <strong>Educational Use:</strong> Safe for educational environments with privacy 
                            protection for student files and assignments
                        </li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        13. Contact Information and Privacy Support
                    </h2>
                    <p>
                        For privacy-related questions, concerns, or requests regarding this Privacy Policy:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                            <strong>Privacy Questions:</strong> Contact our privacy team for clarifications 
                            about our data practices
                        </li>
                        <li>
                            <strong>Security Concerns:</strong> Report potential security issues or 
                            vulnerabilities through responsible disclosure
                        </li>
                        <li>
                            <strong>Feature Requests:</strong> Suggest privacy-enhancing features or 
                            improvements to our platform
                        </li>
                        <li>
                            <strong>Compliance Inquiries:</strong> Questions about regulatory compliance 
                            and data protection standards
                        </li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        14. Privacy Policy Updates
                    </h2>
                    <p>
                        We may update this Privacy Policy periodically to reflect changes in our practices, 
                        technology, or legal requirements. Any updates will be clearly communicated through:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Updated effective dates on this page</li>
                        <li>Prominent notifications for significant changes</li>
                        <li>Continued commitment to privacy-first principles</li>
                        <li>Maintaining or enhancing current privacy protections</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                        15. Related Privacy Resources
                    </h2>
                    <p>
                        Learn more about online privacy and explore additional privacy-focused tools:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="space-y-3 p-6 rounded-lg border">
                            <h3 className="text-lg font-semibold text-foreground">Privacy-First Developer Tools</h3>
                            <p className="text-sm">
                                Explore additional privacy-focused development tools and utilities that prioritize 
                                user data protection and local processing capabilities.
                            </p>
                            <a 
                                href="https://sopkit.github.io/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                            >
                                Explore SopKit →
                            </a>
                        </div>
                        <div className="space-y-3 p-6 rounded-lg border">
                            <h3 className="text-lg font-semibold text-foreground">Secure Online Utilities</h3>
                            <p className="text-sm">
                                Access a collection of privacy-conscious online tools designed with security 
                                and user privacy as primary considerations.
                            </p>
                            <a 
                                href="https://30tools.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                            >
                                Visit 30Tools →
                            </a>
                        </div>
                    </div>
                </section>

                <section className="text-center p-8 border rounded-lg bg-muted/50">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                        Privacy-First File Conversion
                    </h3>
                    <p className="text-base max-w-2xl mx-auto">
                        Experience the freedom of unlimited file conversion with complete privacy protection. 
                        Your files never leave your device, ensuring enterprise-level security for personal use.
                    </p>
                </section>
            </div>
        </div>
    );
}
