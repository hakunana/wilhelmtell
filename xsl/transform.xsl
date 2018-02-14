<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xd="http://www.pnp-software.com/XSLTdoc" xmlns="http://www.w3.org/1999/xhtml" version="1.0">
<xd:doc type="stylesheet">Main stylesheet for transformation</xd:doc>

  <xd:doc>
    Output will be XHTML. 
    It is recommended to set output to XML instead to HTML for XHTML.
  </xd:doc>
  <xsl:output method="xml" indent="yes" encoding="UTF-8"/>
  
   <xd:doc type="string">
    Parameter used for setting the labels to the corresponding chosen language on the webpage.
  </xd:doc>
  <xsl:param name="labellang"/>
 
  <xd:doc>
    Entry template wich is run first and matching everything in root.
    This template generates the create JSON button and calls the other templates recursively.
  </xd:doc>
  <xsl:template name="First_Entry" match="/">
    <xsl:apply-templates/>
    <br/>
    <button id="genJSONbtn" onclick="validateAndParse('body-content')">
      <xsl:choose>
        <xsl:when test="($labellang = 'labelfr')" >
          Générer JSON-LD
        </xsl:when>
        <xsl:when test="($labellang = 'labelde')" >
          JSON-LD erzeugen
        </xsl:when>
        <xsl:when test="($labellang = 'labelit')">
          Generare JSON-LD
        </xsl:when>
        <xsl:otherwise>
          Generate JSON-LD
        </xsl:otherwise>
      </xsl:choose>
    </button>
  </xsl:template>

  <xd:doc>
    Template matching each input field on one given hierarchy (the hierarchy is determined by the caller).
    This template generates the html input tags including labels, attributes and unique id.
  </xd:doc>
<!-- For each input field -->
  <xsl:template name="Generate_Input_Tags" match="input">
    <!-- Check display and edit -->
    <xsl:choose>
      <!-- If label should be displayed and input field editable -->
      <xsl:when test="(@displaylabel = 'true') and (@edit = 'true')">
        <!-- Create label -->
        <label inschemaorg="visible">
          <!-- Create visible input field -->
          <xsl:choose>
            <xsl:when test="($labellang = 'labelfr')" >
              <xsl:value-of select="@labelfr"/>
              <xsl:if test="@required='true'"> *</xsl:if>
            </xsl:when>
            <xsl:when test="($labellang = 'labelit')">
              <xsl:value-of select="@labelit"/>
              <xsl:if test="@required='true'"> *</xsl:if>
            </xsl:when>
            <xsl:when test="($labellang = 'labelen')" >
              <xsl:value-of select="@labelen"/>
              <xsl:if test="@required='true'"> *</xsl:if>
            </xsl:when>
              <xsl:when test="($labellang = 'labelde')">
                <xsl:value-of select="@labelde"/>
                <xsl:if test="@required='true'"> *</xsl:if>
              </xsl:when>
          </xsl:choose>
          <input id="{generate-id()}" schemaorgid="{@nodeid}" value="{@value}">
            <xsl:if test="@required='true'">
              <xsl:attribute name="required">required</xsl:attribute>
            </xsl:if>
            <xsl:choose>
              <xsl:when test="(@datatype!='')" >
                <xsl:attribute name="datatype">
                  <xsl:value-of select="@datatype"/>
                </xsl:attribute>
              </xsl:when>
              <xsl:otherwise>
                <xsl:attribute name="datatype">http://schema.org/Text</xsl:attribute>
              </xsl:otherwise>
            </xsl:choose>
          </input>
        </label>    
      </xsl:when>
      <!-- If label should be displayed but input field not editable -->
      <xsl:when test="(@displaylabel = 'true') and ((@edit = 'false') or not(@edit))">
        <!-- Create label -->
        <label inschemaorg="hidden">
          <xsl:choose>
            <xsl:when test="($labellang = 'labelfr')" >
              <xsl:value-of select="@labelfr"/>
            </xsl:when>
            <xsl:when test="($labellang = 'labelit')">
              <xsl:value-of select="@labelit"/>
            </xsl:when>
            <xsl:when test="($labellang = 'labelen')" >
              <xsl:value-of select="@labelen"/>
            </xsl:when>
              <xsl:when test="($labellang = 'labelde')">
                <xsl:value-of select="@labelde"/>
              </xsl:when>
          </xsl:choose>
          <input id="{generate-id()}" style="display:none" schemaorgid="{@nodeid}" value="{@value}">
            <xsl:if test="@required='true'">
              <xsl:attribute name="required">required</xsl:attribute>
            </xsl:if>
            <xsl:choose>
              <xsl:when test="(@datatype!='')" >
                <xsl:attribute name="datatype">
                  <xsl:value-of select="@datatype"/>
                </xsl:attribute>
              </xsl:when>
              <xsl:otherwise>
                <xsl:attribute name="datatype">http://schema.org/Text</xsl:attribute>
              </xsl:otherwise>
            </xsl:choose>
          </input>
        </label>
      </xsl:when>
      <!-- If no label and input field not editable -->
      <xsl:otherwise>
        <!-- Create hidden input field -->
        <input id="{generate-id()}" style="display:none" schemaorgid="{@nodeid}" value="{@value}">
          <xsl:if test="@required='true'">
            <xsl:attribute name="required">required</xsl:attribute>
          </xsl:if>
          <xsl:choose>
            <xsl:when test="(@datatype!='')" >
              <xsl:attribute name="datatype">
                <xsl:value-of select="@datatype"/>
              </xsl:attribute>
            </xsl:when>
            <xsl:otherwise>
              <xsl:attribute name="datatype">http://schema.org/Text</xsl:attribute>
            </xsl:otherwise>
          </xsl:choose>
        </input>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xd:doc>
    Template matching each nodeelem on one given hierarchy (the hierarchy is determined by the caller).
    This template generates the HTML var tags which represent the curly brackets surrounding each object in the JSON.
    This template is only used for nodes which have attribute multiplechildren = true.
  </xd:doc>
  <xsl:template name="Generate_Var_Tags" match="nodeelem">
    <div id="{generate-id()}nel" jsonval="nodeelem">
      <xsl:choose>
        <xsl:when test="(@displaylabel = 'true') and ($labellang = 'labelfr')" >
          <p usage="subtitle">
            <xsl:value-of select="@labelfr"/>
          </p>
        </xsl:when>
        <xsl:when test="(@displaylabel = 'true') and ($labellang = 'labelit')">
          <p usage="subtitle">
            <xsl:value-of select="@labelit"/>
          </p>
        </xsl:when>
        <xsl:when test="(@displaylabel = 'true') and ($labellang = 'labelen')">
          <p usage="subtitle">
            <xsl:value-of select="@labelen"/>
          </p>
        </xsl:when>
        <xsl:when test="(@displaylabel = 'true') and ($labellang = 'labelde')">
          <p usage="subtitle">
            <xsl:value-of select="@labelde"/>
          </p>
        </xsl:when>
      </xsl:choose>
      <xsl:apply-templates/>
    </div>
  </xsl:template>

  <xd:doc>
    Template matching each node on one given hierarchy (the hierarchy is determined by the caller).
    This template generates the HTML var tags which represent the square brackets (in case of attribute multiplechildren = true) and curly brackets surrounding each object in the JSON.
    Also, this template generates the div container representing each JSON object.
  </xd:doc>
  <xsl:template name="Generate_Div_and_Var_Tags" match="node">
    <xsl:choose>
      <xsl:when test="(@multiplechildren = 'true')">
        <div id="{generate-id()}" staticid="{generate-id()}" schemaorgid="{@nodeid}" multiplechildren="{@multiplechildren}">
          <xsl:if test="@required='true'">
            <xsl:attribute name="required">required</xsl:attribute>
          </xsl:if>
            <xsl:choose>
              <xsl:when test="(@displaylabel = 'true') and ($labellang = 'labelfr')" >
                <p usage="title">
                  <xsl:value-of select="@labelfr"/>
                </p>
              </xsl:when>
              <xsl:when test="(@displaylabel = 'true') and ($labellang = 'labelit')">
                <p usage="title">
                  <xsl:value-of select="@labelit"/>
                </p>
              </xsl:when>
              <xsl:when test="(@displaylabel = 'true') and ($labellang = 'labelen')">
                <p usage="title">
                  <xsl:value-of select="@labelen"/>
                </p>
              </xsl:when>
              <xsl:when test="(@displaylabel = 'true') and ($labellang = 'labelde')">
                <p usage="title">
                  <xsl:value-of select="@labelde"/>
                </p>
              </xsl:when>
            </xsl:choose>
          <xsl:apply-templates/>
        </div>
      </xsl:when>
      <xsl:otherwise>
        <div id="{generate-id()}" staticid="{generate-id()}" schemaorgid="{@nodeid}">
          <xsl:if test="@required='true'">
            <xsl:attribute name="required">required</xsl:attribute>
          </xsl:if>
          <xsl:choose>
              <xsl:when test="(@displaylabel = 'true') and ($labellang = 'labelfr')" >
                <p usage="title">
                  <xsl:value-of select="@labelfr"/>
                </p>
              </xsl:when>
              <xsl:when test="(@displaylabel = 'true') and ($labellang = 'labelit')">
                <p usage="title">
                  <xsl:value-of select="@labelit"/>
                </p>
              </xsl:when>
              <xsl:when test="(@displaylabel = 'true') and ($labellang = 'labelen')">
                <p usage="title">
                  <xsl:value-of select="@labelen"/>
                </p>
              </xsl:when>
              <xsl:when test="(@displaylabel = 'true') and ($labellang = 'labelde')">
                <p usage="title">
                  <xsl:value-of select="@labelde"/>
                </p>
              </xsl:when>
            </xsl:choose>
          <xsl:apply-templates/>
        </div>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

</xsl:stylesheet>