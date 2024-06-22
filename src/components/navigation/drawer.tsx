import * as React from "react";
import * as DrawerPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";

import { mergeClasses } from "@/lib/utils";

const Drawer = DrawerPrimitive.Root;
const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerClose = DrawerPrimitive.Close;

// CustomPortal component to wrap DrawerPrimitive.Portal with optional className
const CustomPortal: React.FC<
  DrawerPrimitive.DialogPortalProps & { className?: string }
> = ({ className, children, ...props }) => (
  <DrawerPrimitive.Portal {...props}>
    <div className={mergeClasses(className)}>{children}</div>
  </DrawerPrimitive.Portal>
);
CustomPortal.displayName = DrawerPrimitive.Portal.displayName;

// DrawerOverlay component for drawer backdrop
const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    className={mergeClasses(
      "fixed inset-0 z-50 bg-gray-900/10 opacity-100 backdrop-blur-sm",
      className
    )}
    {...props}
    ref={ref}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

// Define variants for the drawer using cva from class-variance-authority
const drawerVariants = cva(
  "fixed z-50 shadow-2xl bg-gray ring-1 ring-black/10 transition-all ease-in-out duration-100",
  {
    variants: {
      side: {
        right:
          "inset-y-0 right-0 h-full max-w-xs w-full data-[state=open]:animate-drawer-open data-[state=closed]:animate-drawer-close",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

// DrawerContent component combining CustomPortal, DrawerOverlay, and DrawerPrimitive.Content
interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerVariants> {}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <CustomPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={mergeClasses(drawerVariants({ side }), className)}
      {...props}
    >
      {children}
    </DrawerPrimitive.Content>
  </CustomPortal>
));
DrawerContent.displayName = DrawerPrimitive.Content.displayName;

export { Drawer, DrawerTrigger, DrawerClose, DrawerContent };
