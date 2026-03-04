import {
  ChevronRightIcon,
  FileIcon,
  FolderIcon,
  FolderOpenIcon,
  FileTextIcon,
  ImageIcon,
  CodeIcon,
  SettingsIcon,
  PackageIcon,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { useState } from "react";

const getFileIcon = (fileName) => {
  const extension = fileName.split(".").pop()?.toLowerCase();

  switch (extension) {
    case "js":
    case "jsx":
    case "ts":
    case "tsx":
    case "vue":
    case "py":
    case "java":
    case "cpp":
    case "c":
    case "cs":
    case "php":
    case "rb":
    case "go":
    case "rs":
      return CodeIcon;
    case "json":
    case "xml":
    case "yaml":
    case "yml":
    case "toml":
    case "config":
      return SettingsIcon;
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "svg":
    case "webp":
    case "ico":
      return ImageIcon;
    case "md":
    case "txt":
    case "doc":
    case "docx":
    case "pdf":
      return FileTextIcon;
    case "package":
    case "lock":
      return PackageIcon;
    default:
      return FileIcon;
  }
};

export const TreeView = ({ data, value, onSelect }) => {
  return (
    <div className="w-[20%] h-full">
      <div className="p-3">
        <div className="space-y-1">
          {data.map((item, index) => (
            <Tree
              key={index}
              item={item}
              selectedValue={value}
              onSelect={onSelect}
              parentPath=""
              depth={0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Tree = ({ item, selectedValue, onSelect, parentPath, depth = 0 }) => {
  const [name, ...items] = Array.isArray(item) ? item : [item];
  const currentPath = parentPath ? `${parentPath}/${name}` : name;
  const [isOpen, setIsOpen] = useState(true);

  if (!items.length) {
    const isSelected = selectedValue === currentPath;
    const FileIconComponent = getFileIcon(name);

    return (
      <div
        className={cn(
          "group relative overflow-hidden transition-all duration-200 cursor-pointer",
          "hover:bg-background/60 hover:shadow-sm rounded-md px-2 py-1.5",
          "border border-transparent hover:border-border/40",
          "flex items-center gap-2 min-w-0",
          isSelected && "bg-primary/20 border-primary/40 shadow-sm",
        )}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        onClick={() => onSelect?.(currentPath)}
      >
        <FileIconComponent
          className={cn(
            "size-3.5 shrink-0 transition-all duration-200",
            isSelected
              ? "text-primary scale-110"
              : "text-sidebar-foreground group-hover:text-foreground",
          )}
        />
        <span
          className={cn(
            "truncate text-xs font-medium transition-all duration-200",
            isSelected
              ? "text-primary font-semibold"
              : "text-sidebar-foreground group-hover:text-foreground",
          )}
        >
          {name}
        </span>
        {isSelected && (
          <div className="absolute inset-y-0 left-0 w-0.5 bg-primary rounded-r-full" />
        )}
      </div>
    );
  }

  // It's a folder
  return (
    <div>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <div
            className={cn(
              "group relative overflow-hidden transition-all duration-200 cursor-pointer",
              "hover:bg-background/60 hover:shadow-sm rounded-md px-2 py-1.5",
              "border border-transparent hover:border-border/40",
              "flex items-center gap-2 min-w-0 font-medium",
            )}
            style={{ paddingLeft: `${depth * 16 + 8}px` }}
          >
            <ChevronRightIcon
              className={cn(
                "size-3.5 shrink-0 transition-all duration-300 ease-out",
                isOpen
                  ? "rotate-90 text-primary"
                  : "text-sidebar-foreground group-hover:text-foreground",
              )}
            />
            {isOpen ? (
              <FolderOpenIcon className="size-3.5 shrink-0 text-primary transition-all duration-200" />
            ) : (
              <FolderIcon className="size-3.5 shrink-0 text-sidebar-foreground group-hover:text-foreground transition-all duration-200" />
            )}
            <span
              className={cn(
                "truncate text-xs transition-all duration-200",
                isOpen
                  ? "text-primary/90 font-semibold"
                  : "text-sidebar-foreground group-hover:text-foreground",
              )}
            >
              {name}
            </span>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="transition-all duration-300 ease-out overflow-hidden">
          <div className="pt-1">
            <div
              className={cn(
                "border-l border-border/40 ml-3 pl-2 space-y-1 relative",
                "before:absolute before:inset-y-0 before:-left-px before:w-px",
                "before:bg-linear-to-b before:from-primary/40 before:to-transparent",
              )}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "transform transition-all duration-200 ease-out",
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-1 opacity-0",
                  )}
                  style={{
                    transitionDelay: isOpen ? `${index * 30}ms` : "0ms",
                  }}
                >
                  <Tree
                    item={item}
                    selectedValue={selectedValue}
                    onSelect={onSelect}
                    parentPath={currentPath}
                    depth={depth + 1}
                  />
                </div>
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
