import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

/**
 * SEO Component for dynamic meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
 * Optimized for static sites on GitHub Pages with client-side rendering
 */
export const Seo = ({
  title = 'Dev2Production.Tech | DevOps, Cloud Engineering & Software Development Services',
  description = 'Transform your software delivery with expert DevOps automation, cloud infrastructure, and continuous delivery solutions. We help startups and enterprises ship faster and scale smarter.',
  keywords = 'DevOps, CI/CD, Cloud Infrastructure, Automation, AWS, Azure, GCP, Kubernetes, Docker, Terraform, Infrastructure as Code, DevSecOps, FinOps, Continuous Delivery, Site Reliability Engineering',
  image = 'https://dev2production.tech/meta/og-image.png',
  url = 'https://dev2production.tech',
  type = 'website',
  author = 'Dev2Production Team',
  publishedTime,
  modifiedTime,
  structuredData,
}) => {
  const siteUrl = 'https://dev2production.tech';
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  // Default structured data for Organization
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dev2Production.Tech',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Expert DevOps automation and cloud infrastructure services for startups and enterprises',
    sameAs: [
      'https://github.com/Dev2ProductionTech',
      'https://linkedin.com/company/dev2production',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@dev2production.tech',
      contactType: 'Customer Service',
    },
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Dev2Production.Tech" />
      <meta property="og:locale" content="en_US" />

      {/* Article specific OG tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content="DevOps" />
          <meta property="article:tag" content="DevOps" />
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@Dev2Production" />

      {/* JSON-LD Structured Data */}
      {Array.isArray(structuredData)
        ? structuredData.map((sd, i) => (
            sd ? (
              <script key={i} type="application/ld+json">
                {JSON.stringify(sd)}
              </script>
            ) : null
          ))
        : (
          <script type="application/ld+json">
            {JSON.stringify(structuredData || defaultStructuredData)}
          </script>
        )}
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.oneOf(['website', 'article']),
  author: PropTypes.string,
  publishedTime: PropTypes.string,
  modifiedTime: PropTypes.string,
  structuredData: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ]),
};

export default Seo;
