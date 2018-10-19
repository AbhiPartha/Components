import React from 'react';

// Document creator
import DOCCreator, { Description, DocItem, Section, storiesOf } from '../../.storybook/doc-creator';

// Actual component
import CircularImageView from '../../src/molecules/web/CircularImageView'



const CircularImageViewStory = () => (
  <DOCCreator title="Circular Image View">
    <Description>Displays a image in circulat wrapper</Description>
    <Section title="Props">

      <DocItem
        name="imageUrl"
        typeInfo="string: isRequired"
        description="A circular image from image Url is shown"
        example={{
          render: () => <CircularImageView imageUrl="https://via.placeholder.com/400x400"/>
        }}
      />

      <DocItem
        name="ratio"
        typeInfo="string: isOptional"
        description="To customize the width and height of the circularView"
        example={{
          render: () => <CircularImageView 
                            imageUrl="https://via.placeholder.com/400x400"
                            ratio="250px"
                        />
        }}
      />
    </Section>
  </DOCCreator>
);



storiesOf('Web', module).add('CircularImageView', CircularImageViewStory);