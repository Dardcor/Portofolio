import { Helmet } from 'react-helmet-async';
import socialLinks from '../link_media/link.json';

const site = {
  title: 'Syahrul Ardi Prasetiyo | Full Stack Developer',
  description:
    'Portofolio resmi Syahrul Ardi Prasetiyo — Full Stack Developer spesialis React.js, Next.js, Tailwind CSS, Node.js, dan Laravel. Membangun aplikasi web modern berperforma tinggi.',
  url: 'https://dardcor.my.id',
  name: 'Syahrul Ardi Prasetiyo',
  image: 'https://dardcor.my.id/src/images/random/profile.png',
  logo: 'https://dardcor.my.id/src/images/random/circular_logo.png',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: site.name,
      url: site.url,
      image: site.image,
      jobTitle: 'Full Stack Developer',
      description: site.description,
      sameAs: [
        socialLinks.github,
        socialLinks.linkedin,
        socialLinks.instagram,
      ],
      knowsAbout: [
        'React.js', 'Next.js', 'TypeScript', 'Tailwind CSS',
        'Node.js', 'Laravel', 'Nest.js', 'Supabase', 'JavaScript', 'HTML', 'CSS',
      ],
    },
    {
      '@type': 'WebSite',
      name: site.name,
      url: site.url,
      description: site.description,
      publisher: { '@type': 'Person', name: site.name },
      inLanguage: 'id',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/#home` },
        { '@type': 'ListItem', position: 2, name: 'About', item: `${site.url}/#about` },
        { '@type': 'ListItem', position: 3, name: 'Skills', item: `${site.url}/#skills` },
        { '@type': 'ListItem', position: 4, name: 'Experience', item: `${site.url}/#experience` },
        { '@type': 'ListItem', position: 5, name: 'Certificates', item: `${site.url}/#certificates` },
        { '@type': 'ListItem', position: 6, name: 'Projects', item: `${site.url}/#projects` },
        { '@type': 'ListItem', position: 7, name: 'Contact', item: `${site.url}/#contact` },
      ],
    },
  ],
};

function SEO() {
  return (
    <Helmet prioritizeSeoTags>
      <html lang="id" />
      <title>{site.title}</title>
      <meta name="description" content={site.description} />
      <meta name="keywords" content="Full Stack Developer, React.js Developer, Next.js, Tailwind CSS, JavaScript, TypeScript, Node.js, Laravel, Portfolio, Web Developer Indonesia, Syahrul Ardi Prasetiyo" />
      <meta name="author" content={site.name} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={site.url} />

      {/* Open Graph */}
      <meta property="og:title" content={site.title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:url" content={site.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:image" content={site.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="id_ID" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={site.title} />
      <meta name="twitter:description" content={site.description} />
      <meta name="twitter:image" content={site.image} />
      <meta name="twitter:creator" content="@dardcor" />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}

export default SEO;
