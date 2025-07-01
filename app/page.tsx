// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
      <div className="space-y-16 pb-8">
          {/* Title + Desc */}
          <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-medium text-center">
                  Convertio - Free Online File Converter for All Formats
              </h1>
              <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
                  Transform any file instantly with Convertio – the world's most powerful free online converter. 
                  Convert videos, audio files, images, and documents between 500+ formats including MP4, MP3, PDF, 
                  JPG, PNG, and more. No registration required, unlimited conversions, completely free forever.
              </p>
          </div>

          {/* Upload Box */}
          <Dropzone />

          {/* Features Section */}
          <section className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-center">
                  Why Choose Convertio for File Conversion?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-3 p-6 rounded-lg border">
                      <h3 className="text-xl font-semibold">500+ Supported Formats</h3>
                      <p className="text-muted-foreground">
                          Convert between all popular formats including MP4 to AVI, MP3 to WAV, JPG to PNG, 
                          PDF to DOCX, and hundreds more combinations.
                      </p>
                  </div>
                  <div className="space-y-3 p-6 rounded-lg border">
                      <h3 className="text-xl font-semibold">Lightning Fast Conversion</h3>
                      <p className="text-muted-foreground">
                          Advanced WebAssembly technology ensures your files are converted in seconds, 
                          not minutes. Process multiple files simultaneously.
                      </p>
                  </div>
                  <div className="space-y-3 p-6 rounded-lg border">
                      <h3 className="text-xl font-semibold">100% Free & Unlimited</h3>
                      <p className="text-muted-foreground">
                          No file size limits, no watermarks, no registration required. 
                          Convert unlimited files completely free forever.
                      </p>
                  </div>
                  <div className="space-y-3 p-6 rounded-lg border">
                      <h3 className="text-xl font-semibold">Privacy Protected</h3>
                      <p className="text-muted-foreground">
                          All conversions happen in your browser. Your files never leave your device, 
                          ensuring complete privacy and security.
                      </p>
                  </div>
                  <div className="space-y-3 p-6 rounded-lg border">
                      <h3 className="text-xl font-semibold">Cross-Platform</h3>
                      <p className="text-muted-foreground">
                          Works on Windows, Mac, Linux, iOS, and Android. Convert files on any device 
                          with just a web browser.
                      </p>
                  </div>
                  <div className="space-y-3 p-6 rounded-lg border">
                      <h3 className="text-xl font-semibold">Batch Processing</h3>
                      <p className="text-muted-foreground">
                          Convert multiple files at once. Upload dozens of files and convert them 
                          all simultaneously for maximum efficiency.
                      </p>
                  </div>
              </div>
          </section>

          {/* Supported Formats Section */}
          <section className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-center">
                  Comprehensive File Format Support
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-center">Video Formats</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                          <p>• MP4 to AVI converter</p>
                          <p>• MOV to MP4 converter</p>
                          <p>• WMV to MP4 converter</p>
                          <p>• MKV to MP4 converter</p>
                          <p>• WEBM to MP4 converter</p>
                          <p>• FLV to MP4 converter</p>
                          <p>• M4V to MP4 converter</p>
                          <p>• 3GP to MP4 converter</p>
                      </div>
                  </div>
                  <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-center">Audio Formats</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                          <p>• MP3 to WAV converter</p>
                          <p>• FLAC to MP3 converter</p>
                          <p>• AAC to MP3 converter</p>
                          <p>• OGG to MP3 converter</p>
                          <p>• M4A to MP3 converter</p>
                          <p>• WMA to MP3 converter</p>
                          <p>• AIFF to MP3 converter</p>
                          <p>• AU to MP3 converter</p>
                      </div>
                  </div>
                  <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-center">Image Formats</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                          <p>• JPG to PNG converter</p>
                          <p>• PNG to JPG converter</p>
                          <p>• GIF to MP4 converter</p>
                          <p>• WEBP to JPG converter</p>
                          <p>• BMP to PNG converter</p>
                          <p>• TIFF to JPG converter</p>
                          <p>• SVG to PNG converter</p>
                          <p>• ICO to PNG converter</p>
                      </div>
                  </div>
                  <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-center">Document Formats</h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                          <p>• PDF to DOCX converter</p>
                          <p>• DOCX to PDF converter</p>
                          <p>• XLSX to CSV converter</p>
                          <p>• PPTX to PDF converter</p>
                          <p>• TXT to PDF converter</p>
                          <p>• RTF to DOCX converter</p>
                          <p>• ODT to DOCX converter</p>
                          <p>• HTML to PDF converter</p>
                      </div>
                  </div>
              </div>
          </section>

          {/* Long-tail SEO Content */}
          <section className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-center">
                  Complete Guide to Online File Conversion
              </h2>
              <div className="prose max-w-none text-muted-foreground">
                  <p className="text-base leading-relaxed">
                      In today's digital landscape, file conversion has become an essential skill for professionals, 
                      students, content creators, and everyday users. Whether you need to convert MP4 to AVI for 
                      compatibility with older media players, transform high-quality FLAC audio files to MP3 for 
                      mobile devices, compress large PNG images to optimized JPG format for web use, or convert 
                      complex PDF documents to editable DOCX format for Microsoft Word, having access to a reliable, 
                      fast, and free online file converter is crucial for productivity and workflow optimization.
                  </p>
                  
                  <p className="text-base leading-relaxed mt-4">
                      Convertio revolutionizes the file conversion experience by leveraging cutting-edge WebAssembly 
                      technology that processes conversions directly in your browser, eliminating the need for file 
                      uploads to external servers and ensuring complete privacy protection. This innovative approach 
                      means your sensitive documents, personal photos, confidential videos, and important audio 
                      recordings never leave your device during the conversion process, providing enterprise-level 
                      security for personal and professional use cases.
                  </p>

                  <p className="text-base leading-relaxed mt-4">
                      The platform supports an extensive range of conversion scenarios including video format 
                      transformations like converting MOV files recorded on iPhones to universally compatible MP4 
                      format, audio conversions such as transforming lossless FLAC recordings to space-efficient 
                      MP3 files while maintaining optimal quality settings, image optimizations including batch 
                      conversion of RAW camera files to web-ready JPEG format with customizable compression levels, 
                      and document transformations like converting legacy DOC files to modern DOCX format or 
                      transforming presentations from PPTX to PDF for universal viewing compatibility.
                  </p>

                  <p className="text-base leading-relaxed mt-4">
                      Professional photographers benefit from Convertio's advanced image conversion capabilities, 
                      converting high-resolution TIFF files to compressed JPEG format for client delivery, 
                      transforming PNG graphics with transparency to JPG format for print production, or converting 
                      vector SVG logos to raster PNG format for various marketing materials. Video editors and 
                      content creators rely on the platform's robust video conversion engine to transform 4K MP4 
                      recordings to HD AVI format for editing compatibility, convert WEBM screen recordings to 
                      MP4 for social media sharing, or compress large MKV files to optimized MP4 format for 
                      faster upload speeds and reduced storage requirements.
                  </p>

                  <p className="text-base leading-relaxed mt-4">
                      Musicians and audio professionals utilize Convertio's comprehensive audio conversion suite 
                      to transform studio-quality WAV recordings to streaming-optimized MP3 format, convert 
                      multi-channel FLAC albums to individual MP3 tracks for digital distribution, or transform 
                      legacy WMA files to modern AAC format for improved quality and compatibility across Apple 
                      and Android devices. The platform's advanced audio processing algorithms maintain optimal 
                      bitrate settings and frequency response characteristics during conversion, ensuring 
                      professional-grade results for commercial and personal projects.
                  </p>

                  <p className="text-base leading-relaxed mt-4">
                      Business professionals and office workers depend on Convertio's document conversion 
                      capabilities to transform PDF reports to editable DOCX format for collaborative editing, 
                      convert complex XLSX spreadsheets to universal CSV format for database imports, or 
                      transform presentation files from PPTX to PDF format for secure distribution and 
                      consistent viewing across different devices and operating systems. The platform maintains 
                      formatting integrity, preserves embedded images and charts, and ensures text layout 
                      accuracy throughout the conversion process.
                  </p>
              </div>
          </section>

          {/* FAQ Section */}
          <section className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-center">
                  Frequently Asked Questions About File Conversion
              </h2>
              <div className="space-y-6">
                  <div className="space-y-3 p-6 rounded-lg border">
                      <h3 className="text-lg font-semibold">
                          How do I convert MP4 to AVI for free without losing quality?
                      </h3>
                      <p className="text-muted-foreground">
                          Upload your MP4 file to Convertio, select AVI as the output format, choose your preferred 
                          quality settings, and click convert. Our advanced compression algorithms maintain video 
                          quality while ensuring compatibility with older media players and editing software that 
                          require AVI format.
                      </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-lg border">
                      <h3 className="text-lg font-semibold">
                          Can I convert multiple files simultaneously using batch conversion?
                      </h3>
                      <p className="text-muted-foreground">
                          Yes! Convertio supports batch file conversion, allowing you to upload and convert dozens 
                          of files at once. Simply select multiple files, choose your desired output format, and 
                          our system will process them simultaneously, saving you time and effort when dealing 
                          with large file collections.
                      </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-lg border">
                      <h3 className="text-lg font-semibold">
                          Is there a file size limit for video and audio conversions?
                      </h3>
                      <p className="text-muted-foreground">
                          No, Convertio doesn't impose file size limits. Whether you're converting small social 
                          media videos or large 4K recordings, our WebAssembly-powered conversion engine handles 
                          files of any size efficiently. The conversion speed depends on your device's processing 
                          power and the complexity of the conversion.
                      </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-lg border">
                      <h3 className="text-lg font-semibold">
                          What's the difference between lossy and lossless audio conversion?
                      </h3>
                      <p className="text-muted-foreground">
                          Lossless formats like FLAC preserve all original audio data, while lossy formats like 
                          MP3 compress files by removing some audio information. When converting FLAC to MP3, 
                          you trade file size for audio quality. Our converter lets you choose bitrate settings 
                          to balance quality and file size according to your needs.
                      </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-lg border">
                      <h3 className="text-lg font-semibold">
                          How do I convert PNG images with transparency to JPG format?
                      </h3>
                      <p className="text-muted-foreground">
                          When converting PNG to JPG, transparent areas are automatically filled with white 
                          background since JPG doesn't support transparency. For best results, consider using 
                          PNG format when transparency is needed, or manually add a background color before 
                          conversion to JPG format.
                      </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-lg border">
                      <h3 className="text-lg font-semibold">
                          Can I convert PDF documents to editable Word format?
                      </h3>
                      <p className="text-muted-foreground">
                          Yes, Convertio can convert PDF files to DOCX format, making them editable in Microsoft 
                          Word. The conversion preserves text formatting, images, and basic layout structure. 
                          For complex PDFs with intricate layouts, some manual formatting adjustments might be 
                          needed after conversion.
                      </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-lg border">
                      <h3 className="text-lg font-semibold">
                          How secure is online file conversion? Are my files private?
                      </h3>
                      <p className="text-muted-foreground">
                          Convertio processes all conversions locally in your browser using WebAssembly technology. 
                          Your files never leave your device or get uploaded to external servers, ensuring complete 
                          privacy and security. This makes it safe for converting sensitive documents, personal 
                          photos, and confidential business files.
                      </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-lg border">
                      <h3 className="text-lg font-semibold">
                          What video formats are best for social media sharing?
                      </h3>
                      <p className="text-muted-foreground">
                          MP4 format with H.264 codec is universally supported across all social media platforms 
                          including YouTube, Instagram, TikTok, and Facebook. For optimal results, convert your 
                          videos to MP4 format with appropriate resolution settings: 1080p for general use, 
                          720p for faster uploads, or 4K for high-quality content.
                      </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-lg border">
                      <h3 className="text-lg font-semibold">
                          How do I optimize images for web use without losing quality?
                      </h3>
                      <p className="text-muted-foreground">
                          For web optimization, convert images to WEBP format for modern browsers (smaller file 
                          sizes with better quality) or JPG format for universal compatibility. Use quality 
                          settings between 80-90% to balance file size and visual quality. PNG format is best 
                          for images with text, logos, or transparency requirements.
                      </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-lg border">
                      <h3 className="text-lg font-semibold">
                          Can I extract audio from video files using Convertio?
                      </h3>
                      <p className="text-muted-foreground">
                          Absolutely! Upload your video file (MP4, AVI, MOV, etc.) and select an audio format 
                          (MP3, WAV, FLAC) as output. Convertio will extract the audio track while maintaining 
                          the original quality. This is perfect for creating podcasts from video recordings or 
                          extracting music from music videos.
                      </p>
                  </div>
              </div>
          </section>

          {/* Additional Tools Section with Backlinks */}
          <section className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-center">
                  Explore More Powerful Tools
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4 p-6 rounded-lg border">
                      <h3 className="text-xl font-semibold">Complete Tool Suite</h3>
                      <p className="text-muted-foreground">
                          Discover our comprehensive collection of professional tools for developers, designers, 
                          and content creators. From code formatters and generators to productivity utilities 
                          and conversion tools.
                      </p>
                      <a 
                          href="https://sopkit.github.io/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                          Explore SopKit Tools →
                      </a>
                  </div>
                  <div className="space-y-4 p-6 rounded-lg border">
                      <h3 className="text-xl font-semibold">30+ Essential Tools</h3>
                      <p className="text-muted-foreground">
                          Access a curated collection of 30 essential online tools for various tasks including 
                          text processing, image editing, data conversion, and development utilities. All tools 
                          are free and require no registration.
                      </p>
                      <a 
                          href="https://30tools.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                          Visit 30Tools →
                      </a>
                  </div>
              </div>
          </section>
      </div>
  );
}
