// app/privacy/page.tsx
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 10, 2026";

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <Badge variant="outline" className="text-sm py-1 px-3">
            Last Updated: {lastUpdated}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            At Murph AI, we take your privacy seriously. This policy explains how we 
            handle your data with care and transparency.
          </p>
        </div>
      </section>

      <Separator className="container mx-auto max-w-4xl" />

      {/* Privacy Policy Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* Introduction */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Murph AI is an intelligent AI assistant created and operated by SQROCK, 
                a technology company dedicated to building innovative AI tools. This 
                Privacy Policy is designed to help you understand how we collect, use, 
                and safeguard your information when you interact with Murph AI.
              </p>
              <p>
                We believe in transparency and want you to feel confident that your 
                privacy is protected. By using Murph AI, you agree to the practices 
                described in this policy.
              </p>
            </div>
          </Card>

          {/* Information We Collect */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              To provide you with the best possible AI assistance, we collect the 
              following types of information:
            </p>
            
            <div className="space-y-4">
              <div className="pl-4 border-l-4 border-primary/20">
                <h3 className="font-medium mb-2">Messages and Conversations</h3>
                <p className="text-muted-foreground">
                  The messages you send to Murph AI and the responses generated are 
                  processed to provide our service. This includes any text, code, or 
                  content you share during conversations.
                </p>
              </div>
              
              <div className="pl-4 border-l-4 border-primary/20">
                <h3 className="font-medium mb-2">Technical Information</h3>
                <p className="text-muted-foreground">
                  We automatically collect basic technical data such as browser type, 
                  device type, operating system, and anonymous usage statistics to 
                  ensure compatibility and optimize performance.
                </p>
              </div>
              
              <div className="pl-4 border-l-4 border-primary/20">
                <h3 className="font-medium mb-2">Usage Analytics</h3>
                <p className="text-muted-foreground">
                  We analyze how users interact with Murph AI to identify trends, 
                  improve features, and enhance the overall user experience. This data 
                  is aggregated and anonymized where possible.
                </p>
              </div>
            </div>
          </Card>

          {/* How We Use Information */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              The information we collect helps us improve and maintain Murph AI:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Improve AI Responses:</span>{' '}
                Conversation data helps us train and refine our AI models to provide 
                more accurate and helpful responses.
              </li>
              <li>
                <span className="font-medium text-foreground">System Enhancement:</span>{' '}
                Technical data and analytics guide our development priorities and 
                feature improvements.
              </li>
              <li>
                <span className="font-medium text-foreground">Security Maintenance:</span>{' '}
                We monitor usage patterns to detect and prevent abuse, ensuring a 
                safe environment for all users.
              </li>
              <li>
                <span className="font-medium text-foreground">User Experience:</span>{' '}
                Analytics help us understand how users interact with Murph AI, 
                allowing us to create a more intuitive and effective assistant.
              </li>
            </ul>
          </Card>

          {/* Data Protection */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                SQROCK takes data protection seriously. We implement reasonable and 
                appropriate technical and organizational security measures to protect 
                your information from unauthorized access, alteration, disclosure, or 
                destruction.
              </p>
              <p>
                While we strive to protect your data, no method of transmission over 
                the Internet or electronic storage is 100% secure. We continuously 
                review and update our security practices to maintain strong protection 
                for your information.
              </p>
            </div>
          </Card>

          {/* Third-Party Services */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Murph AI may utilize third-party AI APIs and services to process 
                certain requests and generate responses. These services are carefully 
                selected and vetted for their security and privacy practices.
              </p>
              <p>
                When your data is processed by third-party services, it is subject to 
                their respective privacy policies. We encourage you to review these 
                policies for a complete understanding of how your information may be 
                handled.
              </p>
            </div>
          </Card>

          {/* User Responsibility */}
          <Card className="p-8 border-amber-200 dark:border-amber-800">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-amber-600 dark:text-amber-400">⚠️</span>
              User Responsibility
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                While Murph AI is designed to be helpful and secure, we recommend that 
                you avoid sharing sensitive personal information in your conversations. 
                This includes:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Passwords, access keys, or security credentials</li>
                <li>Financial information (credit card numbers, bank details)</li>
                <li>Personal identification numbers (Social Security, ID cards)</li>
                <li>Medical records or health information</li>
                <li>Confidential business or proprietary information</li>
              </ul>
              <p className="mt-4">
                You are responsible for the information you choose to share during 
                conversations with Murph AI.
              </p>
            </div>
          </Card>

          {/* Updates to This Policy */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Updates to This Privacy Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As Murph AI evolves and grows, we may update this Privacy Policy to 
                reflect changes in our practices, technologies, or legal requirements. 
                When we make updates, we'll revise the &quot;Last Updated&quot; date at the top 
                of this page.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically to stay 
                informed about how we're protecting your information. Your continued 
                use of Murph AI after any changes constitutes acceptance of the 
                updated policy.
              </p>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-8 bg-muted/50">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                If you have questions, concerns, or requests regarding this Privacy 
                Policy or how we handle your data, please contact us:
              </p>
              
              <div className="grid gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Email:</span>
                  <a 
                    href="mailto:privacy@sqrock.com" 
                    className="text-primary hover:underline"
                  >
                    privacy@sqrock.com
                  </a>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="font-medium">Company:</span>
                  <span>SQROCK Technologies</span>
                </div>
                
                <div className="flex items-start gap-2">
                  <span className="font-medium">Address:</span>
                  <span className="text-muted-foreground">
                    123 Innovation Drive, Suite 100<br />
                    San Francisco, CA 94105<br />
                    United States
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer Note */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Separator className="mb-6" />
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} SQROCK. All rights reserved. Murph AI is a 
            product of SQROCK Technologies.
          </p>
        </div>
      </section>
    </main>
  );
}