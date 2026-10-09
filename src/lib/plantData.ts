export interface PlantInfo {
  name: string;
  density: string;
  notes: string;
  days: string;
}

export type CropKey =
  | 'tomato'
  | 'pepper'
  | 'basil'
  | 'beans'
  | 'carrots'
  | 'lettuce'
  | 'radish'
  | 'marigold'
  | 'spinach';

export const PLANT_DATA: Record<CropKey, PlantInfo> = {
  tomato: {
    name: 'Indeterminate Trellised Tomato',
    density: '1 Plant / Sq. Ft.',
    notes: 'Planted along North trellis line. Companion allies: Sweet Basil & French Marigolds deter hornworms.',
    days: '75-85 days to harvest',
  },
  pepper: {
    name: 'Sweet Bell & Jalapeño Peppers',
    density: '1 Plant / Sq. Ft.',
    notes: 'Thrives in warm micro-climate center rows. Pairs well with Carrots, Basil, and Onions.',
    days: '65-75 days to harvest',
  },
  basil: {
    name: 'Sweet Genovese Basil',
    density: '2 Plants / Sq. Ft.',
    notes: 'Natural pest deterrent. Improves vigor and flavor profile of adjacent tomatoes.',
    days: '40-50 days to harvest',
  },
  beans: {
    name: 'Bush Green Beans (Blue Lake)',
    density: '9 Plants / Sq. Ft.',
    notes: 'Nitrogen-fixing legume. Enriches bed soil for heavy feeding root crops.',
    days: '50-55 days to harvest',
  },
  carrots: {
    name: 'Deep Nantes Carrots',
    density: '16 Plants / Sq. Ft.',
    notes: 'Loose raised bed soil allows straight taproots. Companion: Rosemary & Lettuce.',
    days: '60-70 days to harvest',
  },
  lettuce: {
    name: 'Butterhead & Romaine Lettuce',
    density: '4 Plants / Sq. Ft.',
    notes: 'Front row South exposure. Shaded slightly by mid-row pepper canopy in peak summer heat.',
    days: '45-50 days to harvest',
  },
  radish: {
    name: 'French Breakfast Radish',
    density: '16 Plants / Sq. Ft.',
    notes: 'Fastest harvest crop. Natural soil aerator and trap crop for flea beetles.',
    days: '22-28 days to harvest',
  },
  marigold: {
    name: 'French Marigold (Tagetes)',
    density: '4 Plants / Sq. Ft.',
    notes: 'Roots secrete alpha-terthienyl, suppressing root-knot nematodes and repelling aphids.',
    days: 'Continuous bloom',
  },
  spinach: {
    name: 'Bloomsdale Long Standing Spinach',
    density: '9 Plants / Sq. Ft.',
    notes: 'Cool-season leafy green. Highly productive in early spring and late autumn.',
    days: '40-48 days to harvest',
  },
};
