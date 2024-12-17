import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-6 md:flex-row md:gap-4">
        {/* First Ad */}
        <div className="group relative min-h-[360px] w-full overflow-hidden rounded-lg bg-[#54A6FF] p-6 md:w-1/2">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7BB3FF_0%,#54A6FF_100%)] opacity-50" />
          
          {/* Content */}
          <div className="relative z-10 max-w-[270px]">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              The Best Platform for Car Rental
            </h2>
            <p className="mb-6 text-base text-white/90 sm:text-lg">
              Ease of doing a car rental safely and reliably.
            </p>
            <Button 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Rental Car
            </Button>
          </div>

          {/* Car Image */}
          <div className="absolute bottom-0 right-0 w-[90%] max-w-[500px] transition-transform duration-300 ease-in-out group-hover:scale-105 md:w-[60%]">
            <Image
              src="/images/Ads1.png"
              alt="White sports car"
              width={500}
              height={250}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Second Ad */}
        <div className="group relative min-h-[360px] w-full overflow-hidden rounded-lg bg-[#3563E9] p-6 md:w-1/2">
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L36 48L36 30L54 30L54 48Z' fill='%234B7BFF'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-[270px]">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Easy way to rent a car at a low price
            </h2>
            <p className="mb-6 text-base text-white/90 sm:text-lg">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <Button 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Rental Car
            </Button>
          </div>

          {/* Car Image */}
          <div className="absolute bottom-0 w-[90%] max-w-[500px] transition-transform duration-300 ease-in-out group-hover:scale-105 md:w-[100%]">
            <Image
              src="/images/Ads2.png"
              alt="Silver GT-R"
              width={500}
              height={250}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

