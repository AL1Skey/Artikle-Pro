/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {

        return [
    
          {
    
            source: "/api/:path*",
    
            headers: [
    
              { key: "Access-Control-Allow-Credentials", value: "true" },
    
              { key: "Access-Control-Allow-Origin", value: "*" }, // or replace with your domain
    
              { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PUT,PATCH,POST,DELETE" },
    
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
    
            ],
    
          },
    
        ];
    
      }
};

export default nextConfig;
