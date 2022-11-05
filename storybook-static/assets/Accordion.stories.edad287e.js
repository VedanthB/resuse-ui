var q=Object.defineProperty;var i=(e,n)=>q(e,"name",{value:n,configurable:!0});import{R as T,j as s,a as p,r as u}from"./jsx-runtime.ac038bdd.js";import"./iframe.bff406d4.js";var U={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},N=T.createContext&&T.createContext(U),f=globalThis&&globalThis.__assign||function(){return f=Object.assign||function(e){for(var n,r=1,t=arguments.length;r<t;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f.apply(this,arguments)},W=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r};function P(e){return e&&e.map(function(n,r){return T.createElement(n.tag,f({key:r},n.attr),P(n.child))})}i(P,"Tree2Element");function E(e){return function(n){return s(D,{...f({attr:f({},e.attr)},n),children:P(e.child)})}}i(E,"GenIcon");function D(e){var n=i(function(r){var t=e.attr,o=e.size,a=e.title,d=W(e,["attr","size","title"]),g=o||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),p("svg",{...f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,t,d,{className:l,style:f(f({color:e.color||r.color},r.style),e.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),children:[a&&s("title",{children:a}),e.children]})},"elem");return N!==void 0?s(N.Consumer,{children:function(r){return n(r)}}):n(U)}i(D,"IconBase");function L(e){return E({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}}]})(e)}i(L,"HiChevronDown");function G(e){return E({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"}}]})(e)}i(G,"HiOutlineArrowCircleDown");var B={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var t=[],o=0;o<arguments.length;o++){var a=arguments[o];if(!!a){var d=typeof a;if(d==="string"||d==="number")t.push(a);else if(Array.isArray(a)){if(a.length){var g=r.apply(null,a);g&&t.push(g)}}else if(d==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){t.push(a.toString());continue}for(var l in a)n.call(a,l)&&a[l]&&t.push(l)}}}return t.join(" ")}i(r,"classNames"),e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(B);const k=B.exports;function A(e){return e&&typeof e=="object"&&!Array.isArray(e)}i(A,"isObject");function C(e,...n){if(!n.length)return e;const r=n.shift();if(A(e)&&A(r))for(const t in r)A(r[t])?(e[t]||Object.assign(e,{[t]:{}}),C(e[t],r[t])):Object.assign(e,{[t]:r[t]});return C(e,...n)}i(C,"mergeDeep");const w=i(()=>typeof window<"u","windowExists"),M={accordion:{base:"divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",content:{base:"py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg"},flush:{off:"rounded-lg border",on:"border-b"},title:{arrow:{base:"h-6 w-6 shrink-0",open:{off:"",on:"rotate-180"}},base:"flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",flush:{off:"hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",on:"!bg-transparent dark:!bg-transparent"},heading:"",open:{off:"",on:"text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white"}}},badge:{base:"flex h-fit items-center gap-1 font-semibold",color:{info:"bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",gray:"bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",failure:"bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",success:"bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",warning:"bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",indigo:"bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300",purple:"bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300",pink:"bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300"},href:"group",icon:{off:"rounded px-2 py-0.5",on:"rounded-full p-1.5",size:{xs:"w-3 h-3",sm:"w-3.5 h-3.5"}},size:{xs:"p-1 text-xs",sm:"p-1.5 text-sm"}},darkThemeToggle:{base:"rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",icon:"h-5 w-5"},navbar:{base:"border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",rounded:{on:"rounded",off:""},bordered:{on:"border",off:""},inner:{base:"mx-auto flex flex-wrap items-center justify-between",fluid:{on:"",off:"container"}},brand:"flex items-center",collapse:{base:"w-full md:block md:w-auto",list:"mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",hidden:{on:"hidden",off:""}},link:{base:"block py-2 pr-4 pl-3 md:p-0",active:{on:"bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700",off:"border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"},disabled:{on:"text-gray-400 hover:cursor-not-allowed dark:text-gray-600",off:""}},toggle:{base:"inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",icon:"h-6 w-6 shrink-0"}},sidebar:{base:"h-full",inner:"h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3 dark:bg-gray-800",collapsed:{on:"w-16",off:"w-64"},collapse:{button:"group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",icon:{base:"h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",open:{off:"",on:"text-gray-900"}},label:{base:"ml-3 flex-1 whitespace-nowrap text-left",icon:"h-6 w-6"},list:"space-y-2 py-2"},cta:{base:"mt-6 rounded-lg p-4",color:{blue:"bg-blue-50 dark:bg-blue-900",dark:"bg-dark-50 dark:bg-dark-900",failure:"bg-red-50 dark:bg-red-900",gray:"bg-alternative-50 dark:bg-alternative-900",green:"bg-green-50 dark:bg-green-900",light:"bg-light-50 dark:bg-light-900",red:"bg-red-50 dark:bg-red-900",purple:"bg-purple-50 dark:bg-purple-900",success:"bg-green-50 dark:bg-green-900",yellow:"bg-yellow-50 dark:bg-yellow-900",warning:"bg-yellow-50 dark:bg-yellow-900"}},item:{base:"flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",active:"bg-gray-100 dark:bg-gray-700",collapsed:{insideCollapse:"group w-full pl-8 transition duration-75",noIcon:"font-bold"},content:{base:"px-3 flex-1 whitespace-nowrap"},icon:{base:"h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",active:"text-gray-700 dark:text-gray-100"}},items:"",itemGroup:"mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700",logo:{base:"mb-5 flex items-center pl-2.5",collapsed:{on:"hidden",off:"self-center whitespace-nowrap text-xl font-semibold dark:text-white"},img:"mr-3 h-6 sm:h-7"}},spinner:{base:"inline animate-spin text-gray-200",color:{failure:"fill-red-600",gray:"fill-gray-600",info:"fill-blue-600",pink:"fill-pink-600",purple:"fill-purple-600",success:"fill-green-500",warning:"fill-yellow-400"},light:{off:{base:"dark:text-gray-600",color:{failure:"",gray:"dark:fill-gray-300",info:"",pink:"",purple:"",success:"",warning:""}},on:{base:"",color:{failure:"",gray:"",info:"",pink:"",purple:"",success:"",warning:""}}},size:{xs:"w-3 h-3",sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8",xl:"w-10 h-10"}},tooltip:{target:"w-fit",base:"absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm",animation:"transition-opacity",hidden:"invisible opacity-0",style:{dark:"bg-gray-900 text-white dark:bg-gray-700",light:"border border-gray-200 bg-white text-gray-900",auto:"border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"},content:"relative z-20",arrow:{base:"absolute z-10 h-2 w-2 rotate-45",style:{dark:"bg-gray-900 dark:bg-gray-700",light:"bg-white",auto:"bg-white dark:bg-gray-700"},placement:"-4px"}},card:{base:"flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",children:"flex h-full flex-col justify-center gap-4 p-6",horizontal:{off:"flex-col",on:"flex-col md:max-w-xl md:flex-row"},href:"hover:bg-gray-100 dark:hover:bg-gray-700",img:{base:"",horizontal:{off:"rounded-t-lg",on:"h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"}}}},S=u.exports.createContext({theme:M}),_=i(({children:e,value:n})=>s(S.Provider,{value:n,children:e}),"ThemeProvider");function O(){return u.exports.useContext(S)}i(O,"useTheme");const m=i(e=>{if(!e)return[void 0,void 0,void 0];const[n,r]=u.exports.useState(void 0),t=i(a=>localStorage.setItem("theme",a),"savePreference"),o=i(()=>{!n||(w()&&document.documentElement.classList.toggle("dark"),t(n),r(n=="dark"?"light":"dark"))},"toggleMode");return e&&(u.exports.useEffect(()=>{const a=w()&&!!window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,d=localStorage.getItem("theme")||(a?"dark":"light");d&&r(d)},[]),u.exports.useEffect(()=>{!n||(t(n),w()&&(n!="dark"?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark")))},[n])),[n,r,o]},"useThemeMode");try{_.displayName="ThemeProvider",_.__docgenInfo={description:"",displayName:"ThemeProvider",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"ThemeContextProps"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/components/ReuseUI/ThemeContext.tsx#ThemeProvider"]={docgenInfo:_.__docgenInfo,name:"ThemeProvider",path:"src/lib/components/ReuseUI/ThemeContext.tsx#ThemeProvider"})}catch{}try{m.displayName="useThemeMode",m.__docgenInfo={description:"",displayName:"useThemeMode",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/components/ReuseUI/ThemeContext.tsx#useThemeMode"]={docgenInfo:m.__docgenInfo,name:"useThemeMode",path:"src/lib/components/ReuseUI/ThemeContext.tsx#useThemeMode"})}catch{}const I=i(({children:e,theme:n={}})=>{const{theme:r={},dark:t,usePreferences:o=!0}=n,[a,d,g]=m(o),l=C(M,r);u.exports.useEffect(()=>{t&&(d!=null&&d("dark"),w()&&document.documentElement.classList.add("dark"))},[t,d]);const h=u.exports.useMemo(()=>({theme:l,mode:a,toggleMode:g}),[a,g,l]);return s(S.Provider,{value:h,children:e})},"ReuseUI");try{I.displayName="ReuseUI",I.__docgenInfo={description:"",displayName:"ReuseUI",props:{theme:{defaultValue:{value:"{}"},description:"",name:"theme",required:!1,type:{name:"ThemeProps"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/components/ReuseUI/ReuseUI.tsx#ReuseUI"]={docgenInfo:I.__docgenInfo,name:"ReuseUI",path:"src/lib/components/ReuseUI/ReuseUI.tsx#ReuseUI"})}catch{}try{m.displayName="useThemeMode",m.__docgenInfo={description:"",displayName:"useThemeMode",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/components/ReuseUI/ReuseUI.tsx#useThemeMode"]={docgenInfo:m.__docgenInfo,name:"useThemeMode",path:"src/lib/components/ReuseUI/ReuseUI.tsx#useThemeMode"})}catch{}const j=u.exports.createContext(void 0);function V(){const e=u.exports.useContext(j);if(!e)throw new Error("useAccordionContext should be used within the AccordionPanelContext provider!");return e}i(V,"useAccordionContext");const b=i(({children:e,...n})=>{const{alwaysOpen:r}=n,[t,o]=u.exports.useState(n.isOpen),a=r?{...n,isOpen:t,setOpen:()=>o(!t)}:n;return s(j.Provider,{value:a,children:e})},"AccordionPanel");try{b.displayName="AccordionPanel",b.__docgenInfo={description:"",displayName:"AccordionPanel",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},setOpen:{defaultValue:null,description:"",name:"setOpen",required:!1,type:{name:"(() => void)"}},alwaysOpen:{defaultValue:null,description:"",name:"alwaysOpen",required:!1,type:{name:"boolean"}},arrowIcon:{defaultValue:null,description:"",name:"arrowIcon",required:!1,type:{name:"FC<SVGProps<SVGSVGElement>>"}},flush:{defaultValue:null,description:"",name:"flush",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/components/Accordion/AccordionPanel.tsx#AccordionPanel"]={docgenInfo:b.__docgenInfo,name:"AccordionPanel",path:"src/lib/components/Accordion/AccordionPanel.tsx#AccordionPanel"})}catch{}const y=i(({as:e="h2",children:n,className:r,...t})=>{const{arrowIcon:o,flush:a,isOpen:d,setOpen:g}=V(),l=O().theme.accordion.title,h=i(()=>typeof g<"u"&&g(),"onClick");return p("button",{className:k(l.base,l.flush[a?"on":"off"],l.open[d?"on":"off"],r),onClick:h,type:"button",...t,children:[s(e,{className:l.heading,"data-testid":"ReuseUI-accordion-heading",children:n}),o&&s(o,{"aria-hidden":!0,className:k(l.arrow.base,l.arrow.open[d?"on":"off"]),"data-testid":"ReuseUI-accordion-arrow"})]})},"AccordionTitle");try{y.displayName="AccordionTitle",y.__docgenInfo={description:"",displayName:"AccordionTitle",props:{arrowIcon:{defaultValue:null,description:"",name:"arrowIcon",required:!1,type:{name:"FC<SVGProps<SVGSVGElement>>"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/components/Accordion/AccordionTitle.tsx#AccordionTitle"]={docgenInfo:y.__docgenInfo,name:"AccordionTitle",path:"src/lib/components/Accordion/AccordionTitle.tsx#AccordionTitle"})}catch{}const x=i(({children:e,className:n,...r})=>{const{isOpen:t}=V(),o=O().theme.accordion.content;return s("div",{className:k(o.base,n),"data-testid":"ReuseUI-accordion-content",hidden:!t,...r,children:e})},"AccordionContent");try{x.displayName="AccordionContent",x.__docgenInfo={description:"",displayName:"AccordionContent",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/components/Accordion/AccordionContent.tsx#AccordionContent"]={docgenInfo:x.__docgenInfo,name:"AccordionContent",path:"src/lib/components/Accordion/AccordionContent.tsx#AccordionContent"})}catch{}const z=i(({alwaysOpen:e=!1,arrowIcon:n=L,children:r,flush:t=!1,className:o,...a})=>{const[d,g]=u.exports.useState(0),l=u.exports.useMemo(()=>u.exports.Children.map(r,(Y,R)=>u.exports.cloneElement(Y,{alwaysOpen:e,arrowIcon:n,flush:t,isOpen:d===R,setOpen:()=>g(R)})),[e,n,r,t,d]),h=O().theme.accordion;return s("div",{className:k(h.base,h.flush[t?"on":"off"],o),"data-testid":"ReuseUI-accordion",...a,children:l})},"AccordionComponent");z.displayName="Accordion";b.displayName="Accordion.Panel";y.displayName="Accordion.Title";x.displayName="Accordion.Content";const c=Object.assign(z,{Panel:b,Title:y,Content:x});try{c.displayName="Accordion",c.__docgenInfo={description:"",displayName:"Accordion",props:{alwaysOpen:{defaultValue:{value:"false"},description:"",name:"alwaysOpen",required:!1,type:{name:"boolean"}},arrowIcon:{defaultValue:null,description:"",name:"arrowIcon",required:!1,type:{name:"FC<SVGProps<SVGSVGElement>>"}},flush:{defaultValue:{value:"false"},description:"",name:"flush",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/components/Accordion/Accordion.tsx#Accordion"]={docgenInfo:c.__docgenInfo,name:"Accordion",path:"src/lib/components/Accordion/Accordion.tsx#Accordion"})}catch{}const $={parameters:{storySource:{source:`import type { Meta, Story } from '@storybook/react/types-6-0';
import { HiChevronDown, HiOutlineArrowCircleDown } from 'react-icons/hi';
import type { ComponentProps, FC } from 'react';
import { Accordion, AccordionProps } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  args: {
    alwaysOpen: false,
    flush: false,
  },
} as Meta;

const icon: FC<ComponentProps<'svg'>> = HiChevronDown;

const Template: Story<AccordionProps> = (args) => (
  <Accordion arrowIcon={icon} {...args}>
    <Accordion.Panel>
      <Accordion.Title>What is ReuseUI?</Accordion.Title>
      <Accordion.Content>
        <p className='mb-2 text-gray-500 dark:text-gray-400'>
          ReuseUI is an open-source library of interactive components built on top of Tailwind CSS
          including buttons, dropdowns, modals, navbars, and more.
        </p>
        <p className='text-gray-500 dark:text-gray-400'>
          Check out this guide to learn how to{' '}
          <a
            href='https://ReuseUI.com/docs/getting-started/introduction/'
            className='text-blue-600 hover:underline dark:text-blue-500'
          >
            get started
          </a>{' '}
          and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>Is there a Figma file available?</Accordion.Title>
      <Accordion.Content>
        <p className='mb-2 text-gray-500 dark:text-gray-400'>
          ReuseUI is first conceptualized and designed using the Figma software so everything you
          see in the library has a design equivalent in our Figma file.
        </p>
        <p className='text-gray-500 dark:text-gray-400'>
          Check out the{' '}
          <a
            href='https://ReuseUI.com/figma/'
            className='text-blue-600 hover:underline dark:text-blue-500'
          >
            Figma design system
          </a>{' '}
          based on the utility classes from Tailwind CSS and components from ReuseUI.
        </p>
      </Accordion.Content>
    </Accordion.Panel>
    <Accordion.Panel>
      <Accordion.Title>What are the differences between ReuseUI and Tailwind UI?</Accordion.Title>
      <Accordion.Content>
        <p className='mb-2 text-gray-500 dark:text-gray-400'>
          The main difference is that the core components from ReuseUI are open source under the MIT
          license, whereas Tailwind UI is a paid product. Another difference is that ReuseUi relieI
          on smaller and standalone components, whereas Tailwind UI offers sections of pages.
        </p>
        <p className='mb-2 text-gray-500 dark:text-gray-400'>
          However, we actually recommend using both ReuseUI, ReuseUI Pro, and even Tailwind UI as
          there is no technical reason stopping you from using the best of two worlds.
        </p>
        <p className='mb-2 text-gray-500 dark:text-gray-400'>
          Learn more about these technologies:
        </p>
        <ul className='list-disc pl-5 text-gray-500 dark:text-gray-400'>
          <li>
            <a
              href='https://ReuseUI.com/pro/'
              className='text-blue-600 hover:underline dark:text-blue-500'
            >
              ReuseUI Pro
            </a>
          </li>
          <li>
            <a
              href='https://tailwindui.com/'
              rel='nofollow'
              className='text-blue-600 hover:underline dark:text-blue-500'
            >
              Tailwind UI
            </a>
          </li>
        </ul>
      </Accordion.Content>
    </Accordion.Panel>
  </Accordion>
);

export const Default = Template.bind({});

export const AlwaysOpen = Template.bind({});
AlwaysOpen.storyName = 'Always open';
AlwaysOpen.args = {
  alwaysOpen: true,
};

export const Flush = Template.bind({});
Flush.args = {
  flush: true,
};

export const WithArrowIcon = Template.bind({});
WithArrowIcon.storyName = 'With arrow icon';
WithArrowIcon.args = {
  arrowIcon: HiOutlineArrowCircleDown,
};
`,locationsMap:{default:{startLoc:{col:40,line:17},endLoc:{col:1,line:94},startBody:{col:40,line:17},endBody:{col:1,line:94}},"always-open":{startLoc:{col:40,line:17},endLoc:{col:1,line:94},startBody:{col:40,line:17},endBody:{col:1,line:94}},flush:{startLoc:{col:40,line:17},endLoc:{col:1,line:94},startBody:{col:40,line:17},endBody:{col:1,line:94}},"with-arrow-icon":{startLoc:{col:40,line:17},endLoc:{col:1,line:94},startBody:{col:40,line:17},endBody:{col:1,line:94}}}}},title:"Components/Accordion",component:c,args:{alwaysOpen:!1,flush:!1}},H=L,v=i(e=>p(c,{arrowIcon:H,...e,children:[p(c.Panel,{children:[s(c.Title,{children:"What is ReuseUI?"}),p(c.Content,{children:[s("p",{className:"mb-2 text-gray-500 dark:text-gray-400",children:"ReuseUI is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more."}),p("p",{className:"text-gray-500 dark:text-gray-400",children:["Check out this guide to learn how to"," ",s("a",{href:"https://ReuseUI.com/docs/getting-started/introduction/",className:"text-blue-600 hover:underline dark:text-blue-500",children:"get started"})," ","and start developing websites even faster with components on top of Tailwind CSS."]})]})]}),p(c.Panel,{children:[s(c.Title,{children:"Is there a Figma file available?"}),p(c.Content,{children:[s("p",{className:"mb-2 text-gray-500 dark:text-gray-400",children:"ReuseUI is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file."}),p("p",{className:"text-gray-500 dark:text-gray-400",children:["Check out the"," ",s("a",{href:"https://ReuseUI.com/figma/",className:"text-blue-600 hover:underline dark:text-blue-500",children:"Figma design system"})," ","based on the utility classes from Tailwind CSS and components from ReuseUI."]})]})]}),p(c.Panel,{children:[s(c.Title,{children:"What are the differences between ReuseUI and Tailwind UI?"}),p(c.Content,{children:[s("p",{className:"mb-2 text-gray-500 dark:text-gray-400",children:"The main difference is that the core components from ReuseUI are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that ReuseUi relieI on smaller and standalone components, whereas Tailwind UI offers sections of pages."}),s("p",{className:"mb-2 text-gray-500 dark:text-gray-400",children:"However, we actually recommend using both ReuseUI, ReuseUI Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds."}),s("p",{className:"mb-2 text-gray-500 dark:text-gray-400",children:"Learn more about these technologies:"}),p("ul",{className:"list-disc pl-5 text-gray-500 dark:text-gray-400",children:[s("li",{children:s("a",{href:"https://ReuseUI.com/pro/",className:"text-blue-600 hover:underline dark:text-blue-500",children:"ReuseUI Pro"})}),s("li",{children:s("a",{href:"https://tailwindui.com/",rel:"nofollow",className:"text-blue-600 hover:underline dark:text-blue-500",children:"Tailwind UI"})})]})]})]})]}),"Template"),ee=v.bind({}),F=v.bind({});F.storyName="Always open";F.args={alwaysOpen:!0};const J=v.bind({});J.args={flush:!0};const K=v.bind({});K.storyName="With arrow icon";K.args={arrowIcon:G};const ne=["Default","AlwaysOpen","Flush","WithArrowIcon"];export{F as AlwaysOpen,ee as Default,J as Flush,K as WithArrowIcon,ne as __namedExportsOrder,$ as default};
//# sourceMappingURL=Accordion.stories.edad287e.js.map
